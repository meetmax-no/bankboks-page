import { NextResponse } from "next/server";
import {
  buildWelcomeEmailHtml,
  buildWelcomeEmailText,
  getResendClient,
  getResendConfig,
} from "@/lib/resend";
import { STRINGS, type Locale } from "@/lib/i18n";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface WaitlistRequestBody {
  email?: unknown;
  locale?: unknown;
}

function pickLocale(value: unknown): Locale {
  return value === "en" ? "en" : "nb";
}

export async function POST(request: Request) {
  let body: WaitlistRequestBody;
  try {
    body = (await request.json()) as WaitlistRequestBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid-json" },
      { status: 400 },
    );
  }

  const locale = pickLocale(body.locale);
  const s = STRINGS[locale];

  const rawEmail =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!rawEmail || !EMAIL_REGEX.test(rawEmail) || rawEmail.length > 254) {
    return NextResponse.json(
      { ok: false, error: "invalid-email", message: s.waitlistInvalidEmail },
      { status: 400 },
    );
  }

  // Sjekk env-vars først — gir tydelig feilmelding lokalt før vi anroper Resend
  let resend;
  let cfg;
  try {
    resend = getResendClient();
    cfg = getResendConfig();
  } catch (err) {
    console.error("[waitlist] missing env vars:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "config-error",
        message: s.waitlistError,
      },
      { status: 500 },
    );
  }

  // 1) Legg til i Resend Audience.
  // Resend's contacts.create returnerer 200 selv om kontakten finnes fra før
  // (ifølge dokumentasjonen) — men vi håndterer 422/duplicate eksplisitt.
  let alreadyExisted = false;
  try {
    const result = await resend.contacts.create({
      email: rawEmail,
      audienceId: cfg.audienceId,
      unsubscribed: false,
    });
    // Resend SDK v4 returnerer { data, error }
    if (result.error) {
      const msg = result.error.message?.toLowerCase() ?? "";
      if (msg.includes("already") || msg.includes("exists")) {
        alreadyExisted = true;
      } else {
        console.error("[waitlist] contacts.create error:", result.error);
        return NextResponse.json(
          { ok: false, error: "audience-error", message: s.waitlistError },
          { status: 502 },
        );
      }
    }
  } catch (err) {
    console.error("[waitlist] contacts.create threw:", err);
    return NextResponse.json(
      { ok: false, error: "audience-error", message: s.waitlistError },
      { status: 502 },
    );
  }

  // 2) Send velkomst-mail (kun hvis kontakten er NY — duplikater får ikke spam)
  if (!alreadyExisted) {
    try {
      const sendResult = await resend.emails.send({
        from: cfg.from,
        to: [rawEmail],
        bcc: cfg.bcc ? [cfg.bcc] : undefined,
        subject: s.emailSubject,
        html: buildWelcomeEmailHtml(locale),
        text: buildWelcomeEmailText(locale),
      });
      if (sendResult.error) {
        console.error("[waitlist] emails.send error:", sendResult.error);
        // Audience er oppdatert — ikke returner feil til brukeren, men logg det.
      }
    } catch (err) {
      console.error("[waitlist] emails.send threw:", err);
      // Samme her — kontakten er lagret, vi godtar at mail-en feilet stille.
    }
  }

  return NextResponse.json(
    {
      ok: true,
      already: alreadyExisted,
      message: alreadyExisted ? s.waitlistAlready : s.waitlistSuccess,
    },
    { status: 200 },
  );
}

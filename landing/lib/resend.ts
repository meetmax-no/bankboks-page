/**
 * Resend SDK init + welcome email-builder.
 *
 * Brukes kun fra server-side route handler (`/api/waitlist`).
 */

import "server-only";
import { Resend } from "resend";
import { STRINGS, type Locale } from "./i18n";

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export function getResendClient(): Resend {
  return new Resend(getEnv("RESEND_API_KEY"));
}

export function getResendConfig() {
  const fromEmail = getEnv("RESEND_FROM_EMAIL");
  const fromName = process.env.RESEND_FROM_NAME ?? "Ko|Do · Vault";
  return {
    audienceId: getEnv("RESEND_AUDIENCE_ID"),
    from: `${fromName} <${fromEmail}>`,
    bcc: process.env.RESEND_BCC_EMAIL || undefined,
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://app.kodovault.no",
  };
}

/**
 * Bygger HTML for velkomst-mail. Inline-CSS for å fungere på tvers av e-post-klienter.
 */
export function buildWelcomeEmailHtml(locale: Locale): string {
  const s = STRINGS[locale];
  return `<!doctype html>
<html lang="${locale}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${s.emailSubject}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0a0e1a;font-family:'Inter','Helvetica Neue',Arial,sans-serif;color:#e2e8f0;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#0a0e1a;">
      <tr>
        <td align="center" style="padding:48px 16px;">
          <table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;width:100%;background:linear-gradient(180deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.02) 100%);border:1px solid rgba(255,255,255,0.08);border-radius:16px;">
            <tr>
              <td style="padding:40px 40px 24px 40px;">
                <div style="font-size:13px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#f59e0b;margin-bottom:20px;">
                  Ko|Do &middot; Vault
                </div>
                <h1 style="font-size:28px;font-weight:300;line-height:1.2;color:#ffffff;margin:0 0 24px 0;letter-spacing:-0.02em;">
                  ${s.emailGreeting}
                </h1>
                <p style="font-size:16px;line-height:1.6;color:#cbd5e1;margin:0 0 16px 0;">
                  ${s.emailBody1}
                </p>
                <p style="font-size:16px;line-height:1.6;color:#cbd5e1;margin:0 0 16px 0;">
                  ${s.emailBody2}
                </p>
                <p style="font-size:16px;line-height:1.6;color:#cbd5e1;margin:0 0 32px 0;">
                  ${s.emailBody3}
                </p>
                <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:24px;">
                  <p style="font-size:14px;line-height:1.5;color:#94a3b8;margin:0;">
                    ${s.emailSign}
                  </p>
                  <p style="font-size:15px;font-weight:600;color:#ffffff;margin:4px 0 0 0;">
                    ${s.emailSignName}
                  </p>
                  <p style="font-size:13px;color:#64748b;margin:2px 0 0 0;">
                    ${s.emailSignTitle}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px 40px 40px;">
                <div style="border-top:1px solid rgba(255,255,255,0.05);padding-top:20px;">
                  <p style="font-size:11px;line-height:1.5;color:#475569;margin:0;text-align:center;">
                    Ko|Do &middot; Vault &middot; <a href="https://kodovault.no" style="color:#64748b;text-decoration:none;">kodovault.no</a>
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildWelcomeEmailText(locale: Locale): string {
  const s = STRINGS[locale];
  return [
    `${s.emailGreeting}`,
    "",
    s.emailBody1,
    "",
    s.emailBody2,
    "",
    s.emailBody3,
    "",
    s.emailSign,
    s.emailSignName,
    s.emailSignTitle,
    "",
    "—",
    "Ko|Do · Vault · https://kodovault.no",
  ].join("\n");
}

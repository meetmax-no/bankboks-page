import { NextResponse } from "next/server";

/**
 * Dynamisk prising — leser B2C-prisene fra appens autoritative kilde
 * (admin.kodovault.no/clients/default.json). Kjøres server-side (ingen
 * CORS), med hardkodet fallback slik at siden aldri viser blankt eller
 * knekker om kilden er nede. Revalideres hver time (ISR).
 */
export const revalidate = 3600;

const SOURCE = "https://admin.kodovault.no/clients/default.json";
const FALLBACK = { monthly: 115, yearly: 1104, trialDays: 30, currency: "kr" };

export async function GET() {
  try {
    const res = await fetch(SOURCE, { next: { revalidate: 3600 } });
    if (!res.ok) return NextResponse.json(FALLBACK);
    const d = await res.json();
    const b2c = d?.pricing?.b2c ?? {};
    return NextResponse.json({
      monthly: typeof b2c.monthly === "number" ? b2c.monthly : FALLBACK.monthly,
      yearly: typeof b2c.yearly === "number" ? b2c.yearly : FALLBACK.yearly,
      trialDays:
        typeof d?.lifecycle?.trialDays === "number"
          ? d.lifecycle.trialDays
          : FALLBACK.trialDays,
      currency:
        typeof d?.pricing?.currency === "string"
          ? d.pricing.currency
          : FALLBACK.currency,
    });
  } catch {
    return NextResponse.json(FALLBACK);
  }
}

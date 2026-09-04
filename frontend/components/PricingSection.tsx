"use client";

import { forwardRef, useEffect, useState } from "react";
import { Check } from "lucide-react";
import { STRINGS, type Locale } from "@/lib/i18n";

interface PricingSectionProps {
  locale: Locale;
}

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  REGISTER-FLYTEN ER IKKE LIVE ENNÅ (Mikes kontroll gjenstår):
 *    1. Middleware må slippe register-URL-en offentlig
 *    2. Stripe må flyttes til produksjon (månedlig/årlig kan ikke ta betalt ennå)
 *    3. Register-siden man lander på må bygges om
 *
 *  Derfor er CTA-knappene BEVISST INERTE nå (de navigerer ingensteds).
 *  Når destinasjonen er klar:
 *    - sett env `NEXT_PUBLIC_REGISTER_ENABLED=true` i Vercel
 *    - bekreft REGISTER_BASE under
 *  → da blir knappene ekte lenker til `${REGISTER_BASE}?plan=<trial|monthly|yearly>`.
 *  Ingen kode-push nødvendig for å slå dem på.
 * ─────────────────────────────────────────────────────────────────────────
 */
const REGISTER_ENABLED = process.env.NEXT_PUBLIC_REGISTER_ENABLED === "true";
const REGISTER_BASE = "https://admin.kodovault.no/platform/register";

interface Pricing {
  monthly: number;
  yearly: number;
  trialDays: number;
  currency: string;
}

// Fallback = viser aldri blankt. Overstyres av /api/pricing (som leser
// appens autoritative default.json). Speiler tallene der 2026-09.
const FALLBACK: Pricing = { monthly: 115, yearly: 1104, trialDays: 30, currency: "kr" };

export const PricingSection = forwardRef<HTMLDivElement, PricingSectionProps>(
  function PricingSection({ locale }, ref) {
    const s = STRINGS[locale];
    const [pricing, setPricing] = useState<Pricing>(FALLBACK);

    // Hent prisene dynamisk fra appens kilde (via egen /api/pricing-rute).
    useEffect(() => {
      let alive = true;
      fetch("/api/pricing")
        .then((r) => (r.ok ? r.json() : FALLBACK))
        .then((d) => {
          if (!alive) return;
          setPricing({
            monthly: typeof d.monthly === "number" ? d.monthly : FALLBACK.monthly,
            yearly: typeof d.yearly === "number" ? d.yearly : FALLBACK.yearly,
            trialDays:
              typeof d.trialDays === "number" ? d.trialDays : FALLBACK.trialDays,
            currency:
              typeof d.currency === "string" ? d.currency : FALLBACK.currency,
          });
        })
        .catch(() => {
          /* behold FALLBACK */
        });
      return () => {
        alive = false;
      };
    }, []);

    const nf = new Intl.NumberFormat(locale === "nb" ? "nb-NO" : "en-US");
    const savedPct =
      pricing.monthly > 0
        ? Math.round((1 - pricing.yearly / (pricing.monthly * 12)) * 100)
        : 0;

    const plans = [
      {
        key: "trial",
        name: s.planTrialName,
        price: s.planTrialPrice,
        unit: `${s.trialForWord} ${pricing.trialDays} ${s.daysWord}`,
        desc: s.planTrialDesc,
        bullets: [s.planTrialB1, s.planTrialB2],
        cta: s.planTrialCta,
        highlight: false,
        badge: null as string | null,
      },
      {
        key: "monthly",
        name: s.planMonthlyName,
        price: nf.format(pricing.monthly),
        unit: `${pricing.currency}${s.perMonth}`,
        desc: s.planMonthlyDesc,
        bullets: [s.planMonthlyB1, s.planMonthlyB2],
        cta: s.planMonthlyCta,
        highlight: false,
        badge: null,
      },
      {
        key: "yearly",
        name: s.planYearlyName,
        price: nf.format(pricing.yearly),
        unit: `${pricing.currency}${s.perYear}`,
        desc: s.planYearlyDesc,
        bullets: [`${savedPct}${s.yearlySaveSuffix}`, s.planYearlyB2],
        cta: s.planYearlyCta,
        highlight: true,
        badge: s.yearlyBadge,
      },
    ];

    return (
      <section
        ref={ref}
        id="kom-i-gang"
        data-testid="pricing-section"
        className="relative px-4 sm:px-8 lg:px-16 py-24 sm:py-32 border-t border-white/[0.06]"
        style={{ backgroundColor: "var(--bg-soft)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
            <p className="hairline justify-center inline-flex text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">
              {s.pricingEyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-5">
              {s.pricingTitle}
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              {s.pricingSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {plans.map((p) => {
              const ctaClassName = `h-12 rounded-full px-5 text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                REGISTER_ENABLED
                  ? "hover:scale-[1.02] active:scale-[0.98]"
                  : "cursor-default"
              } ${p.highlight ? "" : "border border-white/15 text-white"}`;
              const ctaStyle = p.highlight
                ? {
                    backgroundColor: "var(--accent)",
                    color: "#0a0e1a",
                    boxShadow: "0 8px 24px -8px var(--accent-glow)",
                  }
                : undefined;

              return (
                <div
                  key={p.key}
                  data-testid={`pricing-card-${p.key}`}
                  className={`relative rounded-3xl border backdrop-blur-xl p-6 sm:p-7 flex flex-col ${
                    p.highlight
                      ? "bg-white/[0.06]"
                      : "bg-white/[0.03] border-white/12"
                  }`}
                  style={
                    p.highlight
                      ? {
                          borderColor: "rgba(250, 204, 21, 0.5)",
                          boxShadow: "0 8px 40px -12px var(--accent-glow)",
                        }
                      : undefined
                  }
                >
                  {p.badge && (
                    <div
                      className="absolute -top-3 left-6 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                      style={{ backgroundColor: "var(--accent)", color: "#0a0e1a" }}
                    >
                      {p.badge}
                    </div>
                  )}

                  <h3 className="text-lg font-semibold text-white mb-1">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-3xl font-bold text-white">
                      {p.price}
                    </span>
                    <span className="text-sm text-white/50">{p.unit}</span>
                  </div>
                  <p className="text-sm text-white/55 mb-5">{p.desc}</p>

                  <ul className="space-y-2 text-sm text-white/70 mb-7 flex-1">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <Check
                          className="h-4 w-4 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--accent)" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {REGISTER_ENABLED ? (
                    <a
                      data-testid={`pricing-cta-${p.key}`}
                      href={`${REGISTER_BASE}?plan=${p.key}`}
                      className={ctaClassName}
                      style={ctaStyle}
                    >
                      {p.cta}
                      <span>→</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      aria-disabled="true"
                      data-testid={`pricing-cta-${p.key}`}
                      className={ctaClassName}
                      style={ctaStyle}
                    >
                      {p.cta}
                      <span>→</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-white/35 mt-6">
            {s.pricingVat}
          </p>

          {/* B2B — tydelig eget felt, men sekundær stil så det ikke
              konkurrerer med B2C-knappene over. */}
          <div className="mt-10 rounded-2xl border border-white/12 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1.5">
                {s.pricingB2bTitle}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                {s.pricingB2bBody}
              </p>
            </div>
            <a
              data-testid="pricing-b2b-cta"
              href="mailto:kontakt@kodovault.no?subject=Bedrift"
              className="h-12 px-6 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/[0.08] transition-all flex items-center justify-center gap-2 flex-shrink-0"
            >
              {s.pricingB2bCta}
            </a>
          </div>

        </div>
      </section>
    );
  },
);

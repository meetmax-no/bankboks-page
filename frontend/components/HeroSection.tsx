"use client";

import { ArrowDown, KeyRound } from "lucide-react";
import { STRINGS, type Locale } from "@/lib/i18n";

interface HeroSectionProps {
  locale: Locale;
  onCtaClick: () => void;
}

/**
 * Hero — matched DNA fra vault unlock-skjermen.
 * Mountain at sunrise fyller skjermen. Glasskort er SUBTILT (white/5,
 * backdrop-blur-3xl, white/12 border) — du skal SE fjellet gjennom det.
 * Bærende bjelke: "Lean Security · Not Security as a Service" som tittel.
 */
export function HeroSection({ locale, onCtaClick }: HeroSectionProps) {
  const s = STRINGS[locale];
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-[100svh] flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 pt-28 pb-20"
    >
      <div className="relative z-10 max-w-2xl w-full">
        {/* Subtilt glasskort — vault unlock-DNA */}
        <div
          data-testid="hero-card"
          className="relative bg-white/[0.04] backdrop-blur-3xl border border-white/[0.12] rounded-3xl shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)] p-8 sm:p-10 lg:p-12 animate-fade-in"
        >
          {/* Liten nøkkel-ikon i hjørnet — finesse-detalj fra vault unlock */}
          <div
            aria-hidden
            className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 flex items-center justify-center shadow-lg"
          >
            <KeyRound className="h-5 w-5 sm:h-6 sm:w-6 text-white/85" />
          </div>

          {/* Eyebrow med gul prikk */}
          <div
            data-testid="hero-eyebrow"
            className="hairline text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55 mb-7 animate-slide-up"
          >
            {s.heroEyebrow}
          </div>

          {/* Hovedtittel — Lean Security */}
          <h1
            data-testid="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-white animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {s.heroTitle}
          </h1>

          {/* Subtitle italic — Not Security as a Service (gul aksent) */}
          <p
            data-testid="hero-title-accent"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-light italic leading-tight tracking-tight animate-slide-up"
            style={{ animationDelay: "0.18s", color: "var(--accent)" }}
          >
            {s.heroTitleAccent}
          </p>

          {/* Body — kort, ydmykt, ingen sammenligning */}
          <div
            className="mt-8 sm:mt-10 space-y-4 text-[15px] sm:text-base text-white/72 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.28s" }}
          >
            <p>{s.heroSubtitle}</p>
            <p className="text-white/85 font-medium">{s.heroSubtitle2}</p>
          </div>

          {/* CTA-rad — gul primary, hvit-outline secondary */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              data-testid="hero-cta-primary"
              onClick={onCtaClick}
              className="group h-12 px-6 rounded-full font-semibold text-sm tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              style={{
                backgroundColor: "var(--accent)",
                color: "#0a0e1a",
                boxShadow: "0 8px 24px -8px var(--accent-glow)",
              }}
            >
              {s.heroCta}
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>

            <a
              href="#why"
              data-testid="hero-cta-secondary"
              className="h-12 px-5 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/[0.04] text-white/80 hover:text-white text-sm font-medium transition-all flex items-center justify-center gap-2"
            >
              {s.heroSecondary}
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Subtil divider + signatur i hvit (ikke håndskrift) */}
          <div
            className="mt-10 sm:mt-12 pt-6 border-t border-white/[0.08] animate-fade-in"
            style={{ animationDelay: "0.55s" }}
          >
            <p
              data-testid="hero-signature"
              className="text-sm font-medium tracking-wide text-white/70"
            >
              {s.heroSignature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

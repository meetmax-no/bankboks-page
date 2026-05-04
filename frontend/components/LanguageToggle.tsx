"use client";

import type { Locale } from "@/lib/i18n";

interface LanguageToggleProps {
  locale: Locale;
  onChange: (next: Locale) => void;
}

/**
 * Flagg-toggle 🇳🇴 / 🇬🇧 — mørk theme, gul-aktiv-state for finesse.
 */
export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  const baseBtn =
    "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all";
  const active = "bg-white/15 text-white shadow-inner";
  const inactive = "text-white/50 hover:text-white/80";

  return (
    <div
      data-testid="language-toggle"
      role="group"
      aria-label="Language toggle"
      className="inline-flex items-center gap-0 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.10] p-1"
    >
      <button
        type="button"
        data-testid="lang-btn-nb"
        onClick={() => onChange("nb")}
        aria-pressed={locale === "nb"}
        aria-label="Norsk"
        className={`${baseBtn} ${locale === "nb" ? active : inactive}`}
      >
        <span className="text-base leading-none" aria-hidden>
          🇳🇴
        </span>
        <span className="tracking-wide">NO</span>
      </button>
      <button
        type="button"
        data-testid="lang-btn-en"
        onClick={() => onChange("en")}
        aria-pressed={locale === "en"}
        aria-label="English"
        className={`${baseBtn} ${locale === "en" ? active : inactive}`}
      >
        <span className="text-base leading-none" aria-hidden>
          🇬🇧
        </span>
        <span className="tracking-wide">EN</span>
      </button>
    </div>
  );
}

"use client";

import { STRINGS, type Locale } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const s = STRINGS[locale];
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="app-footer"
      className="relative px-4 sm:px-8 lg:px-16 py-12 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <div className="text-sm font-semibold text-white/85">
            {s.footerLine1}
          </div>
          <div className="text-xs text-white/55">{s.footerLine2}</div>
          <div className="text-[11px] text-white/40">{s.footerLine3}</div>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono text-white/40">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span className="uppercase tracking-[0.22em]">{s.footerStatus}</span>
          <span className="text-white/20">·</span>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}

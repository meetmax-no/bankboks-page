"use client";

import { STRINGS, type Locale } from "@/lib/i18n";

interface NorthStarSectionProps {
  locale: Locale;
}

export function NorthStarSection({ locale }: NorthStarSectionProps) {
  const s = STRINGS[locale];
  return (
    <section
      data-testid="northstar-section"
      className="relative px-4 sm:px-8 lg:px-16 py-24 sm:py-36"
    >
      <div className="relative max-w-4xl mx-auto">
        <p className="hairline text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-10">
          {s.northEyebrow}
        </p>

        <div className="relative">
          {/* Stort dempet anførselstegn i bakgrunnen */}
          <span
            aria-hidden
            className="absolute -top-12 -left-2 sm:-left-6 text-9xl font-serif leading-none select-none"
            style={{ color: "var(--accent)", opacity: 0.16 }}
          >
            &ldquo;
          </span>

          <blockquote
            data-testid="northstar-quote"
            className="relative text-2xl sm:text-4xl lg:text-5xl font-light leading-[1.3] tracking-tight text-white pl-2 sm:pl-8"
          >
            {s.northQuote.split(/(100\s?%|95\s?%)/g).map((part, i) => {
              if (/^100\s?%$/.test(part)) {
                return (
                  <span
                    key={i}
                    className="font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {part}
                  </span>
                );
              }
              if (/^95\s?%$/.test(part)) {
                return (
                  <span
                    key={i}
                    className="text-white/30 line-through decoration-2 decoration-white/40"
                  >
                    {part}
                  </span>
                );
              }
              return <span key={i}>{part}</span>;
            })}
            <span
              aria-hidden
              className="ml-1 font-serif"
              style={{ color: "var(--accent)", opacity: 0.55 }}
            >
              &rdquo;
            </span>
          </blockquote>
        </div>

        <p className="mt-10 sm:mt-12 pl-2 sm:pl-8 text-sm text-white/45 font-mono tracking-wide">
          — {s.northAuthor}
        </p>

        <p className="mt-12 sm:mt-16 pl-2 sm:pl-8 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed">
          {s.northBody}
        </p>
      </div>
    </section>
  );
}

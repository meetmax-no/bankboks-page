"use client";

import { STRINGS, type Locale } from "@/lib/i18n";

interface FaqSectionProps {
  locale: Locale;
}

export function FaqSection({ locale }: FaqSectionProps) {
  const s = STRINGS[locale];

  const items = [
    { q: s.faqQ1, a: s.faqA1 },
    { q: s.faqQ2, a: s.faqA2 },
    { q: s.faqQ3, a: s.faqA3 },
    { q: s.faqQ4, a: s.faqA4 },
    { q: s.faqQ5, a: s.faqA5 },
  ];

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative px-4 sm:px-8 lg:px-16 py-24 sm:py-32 border-t border-white/[0.06]"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 sm:mb-14">
          <p className="hairline text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">
            {s.faqEyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            {s.faqTitle}
          </h2>
        </div>

        <dl className="divide-y divide-white/[0.08]">
          {items.map((it, i) => (
            <div key={i} data-testid={`faq-item-${i + 1}`} className="py-6 sm:py-7">
              <dt className="text-lg sm:text-xl font-semibold text-white mb-2.5">
                {it.q}
              </dt>
              <dd className="text-[15px] sm:text-base text-white/60 leading-relaxed">
                {it.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

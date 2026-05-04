"use client";

import Image from "next/image";
import { STRINGS, type Locale } from "@/lib/i18n";

interface ArchitectureSectionProps {
  locale: Locale;
}

export function ArchitectureSection({ locale }: ArchitectureSectionProps) {
  const s = STRINGS[locale];
  return (
    <section
      data-testid="architecture-section"
      className="relative px-4 sm:px-8 lg:px-16 py-24 sm:py-32 border-t border-white/[0.06]"
      style={{ backgroundColor: "var(--bg-soft)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="hairline text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">
              {s.archEyebrow}
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
              {s.archTitle}
            </h2>
            <p className="text-[15px] sm:text-base text-white/72 leading-relaxed mb-6">
              {s.archBody}
            </p>
            <p
              className="text-[14px] text-white/55 leading-relaxed italic pl-4 border-l"
              style={{ borderColor: "var(--accent)" }}
            >
              &ldquo;{s.archCaption}&rdquo;
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "PBKDF2-SHA256",
                "AES-256-GCM",
                "WebAuthn PRF",
                "Upstash Redis · EU",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.10] text-[11px] font-mono text-white/70 tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 sm:p-6 shadow-2xl">
              <Image
                src="/architecture.png"
                alt={s.archImageAlt}
                width={1200}
                height={750}
                className="rounded-xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

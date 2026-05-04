"use client";

import { Lock, Server, ShieldOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { STRINGS, type Locale } from "@/lib/i18n";

interface ProblemSectionProps {
  locale: Locale;
}

interface CardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  number: string;
}

function ProblemCard({ icon: Icon, title, body, number }: CardProps) {
  return (
    <div
      data-testid="problem-card"
      className="group relative bg-white/[0.025] border border-white/[0.08] rounded-2xl p-7 transition-all hover:border-white/15 hover:bg-white/[0.04]"
    >
      <div className="flex items-baseline justify-between mb-6">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10">
          <Icon className="h-4.5 w-4.5 text-white/85" strokeWidth={1.5} />
        </div>
        <span
          className="font-mono text-[10px] tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          {number}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-3 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-[14px] text-white/60 leading-relaxed">{body}</p>
    </div>
  );
}

export function ProblemSection({ locale }: ProblemSectionProps) {
  const s = STRINGS[locale];
  return (
    <section
      id="why"
      data-testid="problem-section"
      className="relative px-4 sm:px-8 lg:px-16 py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <p
            className="hairline text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5"
          >
            {s.problemEyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
            {s.problemTitle}
          </h2>
          <p className="text-base sm:text-lg text-white/55 leading-relaxed">
            {s.problemSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <ProblemCard
            icon={Server}
            title={s.problemCardTitle1}
            body={s.problemCardBody1}
            number="01"
          />
          <ProblemCard
            icon={Lock}
            title={s.problemCardTitle2}
            body={s.problemCardBody2}
            number="02"
          />
          <ProblemCard
            icon={ShieldOff}
            title={s.problemCardTitle3}
            body={s.problemCardBody3}
            number="03"
          />
        </div>
      </div>
    </section>
  );
}

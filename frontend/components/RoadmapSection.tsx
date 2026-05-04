"use client";

import { CreditCard, KeyRound, Send, FolderLock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { STRINGS, type Locale } from "@/lib/i18n";

interface RoadmapSectionProps {
  locale: Locale;
}

interface ItemProps {
  version: string;
  title: string;
  body: string;
  icon: LucideIcon;
  isLast?: boolean;
}

function RoadmapItem({ version, title, body, icon: Icon, isLast }: ItemProps) {
  return (
    <div data-testid="roadmap-item" className="relative flex gap-5 sm:gap-7">
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="h-11 w-11 rounded-full flex items-center justify-center border z-10 bg-white/[0.04] backdrop-blur-md"
          style={{
            borderColor: "rgba(250, 204, 21, 0.45)",
            boxShadow: "0 0 16px rgba(250, 204, 21, 0.15)",
          }}
        >
          <Icon
            className="h-4.5 w-4.5"
            style={{ color: "var(--accent)" }}
            strokeWidth={1.5}
          />
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background:
                "linear-gradient(to bottom, rgba(250, 204, 21, 0.35), transparent)",
            }}
          />
        )}
      </div>

      <div className="flex-1 pb-12 sm:pb-14">
        <div
          className="font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
          style={{ color: "var(--accent)" }}
        >
          {version}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-[14px] sm:text-[15px] text-white/60 leading-relaxed max-w-xl">
          {body}
        </p>
      </div>
    </div>
  );
}

export function RoadmapSection({ locale }: RoadmapSectionProps) {
  const s = STRINGS[locale];
  return (
    <section
      data-testid="roadmap-section"
      className="relative px-4 sm:px-8 lg:px-16 py-24 sm:py-32 border-t border-white/[0.06]"
      style={{ backgroundColor: "var(--bg-soft)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <p className="hairline text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">
            {s.roadmapEyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
            {s.roadmapTitle}
          </h2>
          <p className="text-base sm:text-lg text-white/55 leading-relaxed">
            {s.roadmapSub}
          </p>
        </div>

        <div className="pl-2">
          <RoadmapItem
            version="v3.0"
            title={s.v3_0Title}
            body={s.v3_0Body}
            icon={CreditCard}
          />
          <RoadmapItem
            version="v3.1"
            title={s.v3_1Title}
            body={s.v3_1Body}
            icon={KeyRound}
          />
          <RoadmapItem
            version="v4.0"
            title={s.v4_0Title}
            body={s.v4_0Body}
            icon={Send}
          />
          <RoadmapItem
            version="v4.5"
            title={s.v4_5Title}
            body={s.v4_5Body}
            icon={FolderLock}
            isLast
          />
        </div>
      </div>
    </section>
  );
}

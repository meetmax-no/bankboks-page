import Link from "next/link";
import type { ReactNode } from "react";

export function LegalLayout({
  title,
  updated,
  note,
  children,
}: {
  title: string;
  updated: string;
  note: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-block text-[11px] uppercase tracking-[0.22em] text-white/45 hover:text-white/80 transition mb-10"
        >
          ← Ko | Do · Vault
        </Link>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight mb-3">
          {title}
        </h1>
        <p className="text-xs text-white/40 mb-12">{updated}</p>

        <div className="legal space-y-8 text-[15px] leading-relaxed text-white/65">
          {children}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.08] text-xs text-white/35">
          {note}
        </div>
      </div>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-lg sm:text-xl font-semibold text-white mt-10 mb-3">
      {children}
    </h2>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 space-y-1.5 marker:text-white/25">{children}</ul>;
}

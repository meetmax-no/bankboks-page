"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LanguageToggle } from "@/components/LanguageToggle";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { NorthStarSection } from "@/components/NorthStarSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import type { Locale } from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "kodovault-locale";

// Mike sitt valgte hero-bilde — fjell ved soloppgang.
// "Lyst og har et budskap om storhet og frihet."
const HERO_BG_URL =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop";

export default function LandingPage() {
  const [locale, setLocale] = useState<Locale>("nb");
  const [mounted, setMounted] = useState(false);
  const waitlistRef = useRef<HTMLDivElement | null>(null);

  // Default = ALLTID norsk. Engelsk er bonus for utenlands-trafikk.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (saved === "nb" || saved === "en") {
        setLocale(saved);
      }
    } catch {
      // localStorage kan være blokkert — bruk default (nb)
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === "nb" ? "nb" : "en";
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale, mounted]);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Hero-bakgrunn — fjellet fyller hero, lett mørk overlay slik at
          glasskortet leses men fjellet beholder sjelen sin. */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[100svh] pointer-events-none"
      >
        <Image
          src={HERO_BG_URL}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtil mørk gradient — fjellet shines, men teksten leser */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10, 14, 26, 0.32) 0%, rgba(10, 14, 26, 0.55) 70%, rgba(10, 14, 26, 1) 100%)",
          }}
        />
      </div>

      {/* Fixed top-bar */}
      <div
        data-testid="top-bar"
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 py-4 sm:py-5"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <a
            href="#"
            data-testid="brand-logo"
            className="flex items-baseline gap-2 group"
            aria-label="Ko|Do · Vault"
          >
            <span className="text-base sm:text-lg font-light text-white/80 group-hover:text-white transition tracking-tight">
              Ko|Do
            </span>
            <span className="text-white/35 text-base sm:text-lg">·</span>
            <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
              Vault
            </span>
          </a>

          <LanguageToggle locale={locale} onChange={setLocale} />
        </div>
      </div>

      {/* Innhold */}
      <main className="relative z-10">
        <HeroSection locale={locale} onCtaClick={scrollToWaitlist} />
        <ProblemSection locale={locale} />
        <ArchitectureSection locale={locale} />
        <NorthStarSection locale={locale} />
        <RoadmapSection locale={locale} />
        <WaitlistForm locale={locale} ref={waitlistRef} />
        <Footer locale={locale} />
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { STRINGS, type Locale } from "@/lib/i18n";

interface ShowcaseSectionProps {
  locale: Locale;
}

/**
 * Produktbilder. Filene legges i /public/shots/ — inntil de finnes vises
 * en pen plassholder i stedet for et ødelagt bilde, så siden aldri ser
 * knekt ut. Legg inn PNG-ene med disse navnene, så tar rammene resten:
 *
 *   /shots/vault.png         landskap  (nettleser-ramme)  ~1440x900
 *   /shots/camera.png        portrett  (telefon-ramme)    ~1179x2556
 *   /shots/password-lab.png  portrett  (telefon-ramme)    ~1179x2556
 */

function Pending({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-[11px] uppercase tracking-[0.18em] text-white/25 font-mono">
        {label}
      </span>
    </div>
  );
}

function BrowserShot({
  src,
  alt,
  pending,
}: {
  src: string;
  alt: string;
  pending: string;
}) {
  const [ok, setOk] = useState(true);
  return (
    <div
      className="rounded-2xl overflow-hidden border border-white/12 bg-white/[0.03] backdrop-blur-xl"
      style={{ boxShadow: "0 30px 80px -30px rgba(0,0,0,.65)" }}
    >
      {/* nettleser-topplinje — beviser «kjører i nettleseren» uten å si det */}
      <div className="flex items-center gap-2 px-4 h-10 border-b border-white/[0.08] bg-white/[0.02]">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-3 flex-1 max-w-xs h-5 rounded-full bg-white/[0.05] flex items-center px-3">
          <span className="text-[10px] text-white/35 font-mono truncate">
            kodovault.no
          </span>
        </div>
      </div>
      <div className="relative bg-black/40" style={{ aspectRatio: "16 / 10" }}>
        {ok ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setOk(false)}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <Pending label={pending} />
        )}
      </div>
    </div>
  );
}

function PhoneShot({
  src,
  alt,
  pending,
}: {
  src: string;
  alt: string;
  pending: string;
}) {
  const [ok, setOk] = useState(true);
  return (
    <div
      className="mx-auto w-full max-w-[230px] rounded-[2.2rem] border border-white/15 bg-white/[0.03] p-2 backdrop-blur-xl"
      style={{ boxShadow: "0 30px 70px -25px rgba(0,0,0,.7)" }}
    >
      <div
        className="relative rounded-[1.7rem] overflow-hidden bg-black/50"
        style={{ aspectRatio: "393 / 852" }}
      >
        {/* dynamic island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10 h-4 w-16 rounded-full bg-black/80" />
        {ok ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setOk(false)}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : (
          <Pending label={pending} />
        )}
      </div>
    </div>
  );
}

export function ShowcaseSection({ locale }: ShowcaseSectionProps) {
  const s = STRINGS[locale];

  return (
    <section
      id="produktet"
      data-testid="showcase-section"
      className="relative px-4 sm:px-8 lg:px-16 py-24 sm:py-32 border-t border-white/[0.06]"
      style={{ backgroundColor: "var(--bg-soft)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="hairline text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5">
            {s.showcaseEyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-5">
            {s.showcaseTitle}
          </h2>
          <p className="text-base sm:text-lg text-white/55 leading-relaxed">
            {s.showcaseSub}
          </p>
        </div>

        <figure className="m-0">
          <BrowserShot
            src="/shots/vault.png"
            alt={s.shotVaultAlt}
            pending={s.shotPending}
          />
          <figcaption className="mt-4 text-sm text-white/45">
            {s.shotVaultCaption}
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 mt-14">
          <figure className="m-0">
            <PhoneShot
              src="/shots/camera.png"
              alt={s.shotCameraAlt}
              pending={s.shotPending}
            />
            <figcaption className="mt-4 text-sm text-white/45 text-center">
              {s.shotCameraCaption}
            </figcaption>
          </figure>

          <figure className="m-0">
            <PhoneShot
              src="/shots/password-lab.png"
              alt={s.shotLabAlt}
              pending={s.shotPending}
            />
            <figcaption className="mt-4 text-sm text-white/45 text-center">
              {s.shotLabCaption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

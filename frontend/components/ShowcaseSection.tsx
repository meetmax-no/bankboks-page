"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { STRINGS, type Locale } from "@/lib/i18n";

interface ShowcaseSectionProps {
  locale: Locale;
}

/**
 * Produktbilder. Rammene er bevisst nøytrale og bruker bildets NATURLIGE
 * høyde — skjermbildene spriker fra 0,56 til 2,2 i format, og enhver fast
 * aspect-ratio ville enten beskåret dem eller gitt store tomrom.
 *
 * vault-lock.webp har allerede ekte nettleser-ramme i selve bildet, så den
 * får ingen påtegnet ramme (ellers blir det to adressefelt).
 *
 * Mangler en fil, vises en diskré plassholder i stedet for et brukket bilde.
 */

function Pending({ label }: { label: string }) {
  return (
    <div className="relative" style={{ aspectRatio: "4 / 5" }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[11px] uppercase tracking-[0.18em] text-white/25 font-mono">
          {label}
        </span>
      </div>
    </div>
  );
}

function Shot({
  src,
  alt,
  pending,
  bare = false,
}: {
  src: string;
  alt: string;
  pending: string;
  bare?: boolean;
}) {
  const [ok, setOk] = useState(true);
  return (
    <div
      className={
        bare
          ? "rounded-2xl overflow-hidden"
          : "rounded-2xl overflow-hidden border border-white/12 bg-black/40 backdrop-blur-xl"
      }
      style={{ boxShadow: "0 30px 80px -28px rgba(0,0,0,.75)" }}
    >
      {ok ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="block w-full h-auto"
        />
      ) : (
        <Pending label={pending} />
      )}
    </div>
  );
}

export function ShowcaseSection({ locale }: ShowcaseSectionProps) {
  const s = STRINGS[locale];
  const [open, setOpen] = useState(false);

  // Rekkefølge: inngang (master-passord, lab) -> innhold (oversikt, kort)
  // -> drift (backup, mobil). Mobilbildet er portrett 0,45 og får smalere
  // innerbredde, ellers tårner det over nabokortet.
  const cards = [
    { src: "/shots/master-password.webp", alt: s.shotMasterAlt, cap: s.shotMasterCaption },
    { src: "/shots/password-lab.png", alt: s.shotLabAlt, cap: s.shotLabCaption },
    { src: "/shots/vault-dashboard.webp", alt: s.shotDashAlt, cap: s.shotDashCaption },
    { src: "/shots/card-detail.webp", alt: s.shotCardAlt, cap: s.shotCardCaption },
    { src: "/shots/backup.png", alt: s.shotBackupAlt, cap: s.shotBackupCaption },
    { src: "/shots/vault-mobile.webp", alt: s.shotMobileAlt, cap: s.shotMobileCaption, narrow: true },
  ];

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

        {/* Hero: låseskjermen — ekte nettleser-ramme ligger i bildet */}
        <figure className="m-0">
          <Shot
            src="/shots/vault-lock.webp"
            alt={s.shotLockAlt}
            pending={s.shotPending}
            bare
          />
          <figcaption className="mt-4 text-sm text-white/45">
            {s.shotLockCaption}
          </figcaption>
        </figure>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            data-testid="showcase-toggle"
            aria-expanded={open}
            aria-controls="showcase-grid"
            onClick={() => setOpen((v) => !v)}
            className="h-11 px-5 rounded-full border border-white/15 text-white/80 hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-all flex items-center gap-2"
          >
            {open ? s.showcaseHide : `${s.showcaseShowAll} (${cards.length})`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {open && (
          <div
            id="showcase-grid"
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 mt-12 items-start"
          >
            {cards.map((c) => (
              <figure key={c.src} className="m-0">
                <div className={c.narrow ? "mx-auto w-full max-w-[280px]" : ""}>
                  <Shot src={c.src} alt={c.alt} pending={s.shotPending} />
                </div>
                <figcaption
                  className={
                    c.narrow
                      ? "mt-4 text-sm text-white/45 text-center"
                      : "mt-4 text-sm text-white/45"
                  }
                >
                  {c.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

"use client";

import { forwardRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { STRINGS, type Locale } from "@/lib/i18n";

interface WaitlistFormProps {
  locale: Locale;
}

interface WaitlistResponse {
  ok: boolean;
  already?: boolean;
  message?: string;
  error?: string;
}

/**
 * Slank one-liner. Plan-velgeren er sidens CTA — denne er kun et lavmælt
 * alternativ for de som ikke er klare til å opprette vault ennå.
 */
export const WaitlistForm = forwardRef<HTMLDivElement, WaitlistFormProps>(
  function WaitlistForm({ locale }, ref) {
    const s = STRINGS[locale];
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      if (status === "loading") return;
      const trimmed = email.trim();
      if (!trimmed) return;

      setStatus("loading");
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed, locale }),
        });
        const data: WaitlistResponse = await res.json();
        if (res.ok && data.ok) {
          setStatus("success");
          toast.success(data.message ?? s.waitlistSuccess);
          setEmail("");
        } else {
          setStatus("idle");
          toast.error(data.message ?? s.waitlistError);
        }
      } catch (err) {
        console.error("[waitlist] submit error", err);
        setStatus("idle");
        toast.error(s.waitlistError);
      }
    }

    return (
      <section
        ref={ref}
        id="waitlist"
        data-testid="waitlist-section"
        className="relative px-4 sm:px-8 lg:px-16 py-14"
      >
        <div className="max-w-5xl mx-auto rounded-2xl border border-white/12 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1.5">
              {s.waitlistPanelTitle}
            </h3>
            <p className="text-sm text-white/55 leading-relaxed">
              {s.waitlistPanelBody}
            </p>
          </div>

          {status === "success" ? (
            <p
              data-testid="waitlist-success"
              className="text-sm font-medium"
              style={{ color: "var(--accent)" }}
            >
              {s.waitlistSuccess}
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              data-testid="waitlist-form"
              className="flex items-center gap-2 flex-shrink-0"
              noValidate
            >
              <input
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                placeholder={s.waitlistEmailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="waitlist-email-input"
                aria-label={s.waitlistEmailPlaceholder}
                className="h-10 w-52 sm:w-56 px-4 rounded-full bg-white/[0.04] border border-white/12 focus:border-white/35 outline-none text-white text-sm placeholder:text-white/30 transition"
              />
              <button
                type="submit"
                data-testid="waitlist-submit-btn"
                disabled={status === "loading" || !email.trim()}
                aria-label={s.waitlistButton}
                className="h-10 px-4 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/[0.06] disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center"
              >
                {status === "loading" ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <span>→</span>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    );
  },
);

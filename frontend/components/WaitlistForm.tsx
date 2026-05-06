"use client";

import { forwardRef, useState } from "react";
import { Check, Loader2, Mail } from "lucide-react";
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

export const WaitlistForm = forwardRef<HTMLDivElement, WaitlistFormProps>(
  function WaitlistForm({ locale }, ref) {
    const s = STRINGS[locale];
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<
      "idle" | "loading" | "success" | "error"
    >("idle");
    const [resultMessage, setResultMessage] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      if (status === "loading") return;

      const trimmed = email.trim();
      if (!trimmed) return;

      setStatus("loading");
      setResultMessage(null);

      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed, locale }),
        });
        const data: WaitlistResponse = await res.json();

        if (res.ok && data.ok) {
          setStatus("success");
          setResultMessage(data.message ?? s.waitlistSuccess);
          toast.success(data.message ?? s.waitlistSuccess);
          setEmail("");
        } else {
          setStatus("error");
          const msg = data.message ?? s.waitlistError;
          setResultMessage(msg);
          toast.error(msg);
        }
      } catch (err) {
        console.error("[waitlist] submit error", err);
        setStatus("error");
        setResultMessage(s.waitlistError);
        toast.error(s.waitlistError);
      }
    }

    return (
      <section
        ref={ref}
        id="waitlist"
        data-testid="waitlist-section"
        className="relative px-4 sm:px-8 lg:px-16 py-24 sm:py-36"
      >
        {/* Subtil gul glow på toppen — finesse */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(250, 204, 21, 0.08) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-xl mx-auto text-center">
          <p className="hairline justify-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-5 inline-flex">
            {s.waitlistEyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-5 mt-2">
            {s.waitlistTitle}
          </h2>
          <p className="text-base sm:text-lg text-white/55 leading-relaxed mb-10 max-w-md mx-auto">
            {s.waitlistSub}
          </p>

          {status === "success" ? (
            <div
              data-testid="waitlist-success-card"
              className="bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-2xl p-8 animate-slide-up"
              style={{
                boxShadow: "0 8px 32px -8px var(--accent-glow)",
              }}
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-full mb-4 border"
                style={{
                  backgroundColor: "var(--accent-soft)",
                  borderColor: "var(--accent)",
                }}
              >
                <Check className="h-6 w-6" style={{ color: "var(--accent)" }} />
              </div>
              <p className="text-lg font-medium text-white">
                {resultMessage ?? s.waitlistSuccess}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              data-testid="waitlist-form"
              className="space-y-3 px-8 sm:px-0"
              noValidate
            >
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/35 pointer-events-none" />
                <input
                  type="email"
                  required
                  inputMode="email"
                  autoComplete="email"
                  placeholder={s.waitlistEmailPlaceholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  data-testid="waitlist-email-input"
                  className="w-full h-14 pl-12 pr-4 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/12 focus:border-white/35 focus:bg-white/[0.06] outline-none text-white text-[15px] placeholder:text-white/30 transition-all"
                  aria-label={s.waitlistEmailPlaceholder}
                />
              </div>

              <button
                type="submit"
                data-testid="waitlist-submit-btn"
                disabled={status === "loading" || !email.trim()}
                className="w-full h-14 rounded-full font-semibold text-[15px] tracking-wide transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#0a0e1a",
                  boxShadow: "0 8px 24px -8px var(--accent-glow)",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {s.waitlistButtonLoading}
                  </>
                ) : (
                  <>
                    {s.waitlistButton}
                    <span>→</span>
                  </>
                )}
              </button>

              {status === "error" && resultMessage && (
                <p
                  data-testid="waitlist-error-message"
                  className="text-sm text-rose-300"
                >
                  {resultMessage}
                </p>
              )}

              <p className="text-xs text-white/40 leading-relaxed pt-2">
                {s.waitlistConsent}
              </p>
            </form>
          )}
        </div>
      </section>
    );
  },
);

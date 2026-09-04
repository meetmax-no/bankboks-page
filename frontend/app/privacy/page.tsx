import type { Metadata } from "next";
import { LegalLayout, H2, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Ko | Do · Vault",
  description: "How Ko | Do · Vault handles personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="Last updated 4 September 2026"
      note={
        <>
          English translation for convenience. In case of conflict, the{" "}
          <a className="underline underline-offset-2 hover:text-white" href="/personvern">
            Norwegian version
          </a>{" "}
          governs.
        </>
      }
    >
      <p>
        <strong>In short:</strong> we cannot read the contents of your vault. It is
        encrypted on your device before it reaches us, and we hold no key. Below is
        a precise account of what we <em>do</em> process — because it is not
        nothing.
      </p>

      <H2>1. Data controller</H2>
      <p>
        Me &amp; Max AS, company no. 987 607 882 MVA, Oslo, Norway. Contact:{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        .
      </p>

      <H2>2. What we process</H2>
      <UL>
        <li>
          <strong>Account:</strong> first name, last name, email address, chosen
          subdomain and language preference.
        </li>
        <li>
          <strong>Vault contents:</strong> stored only as an encrypted blob. We
          cannot read passwords, cards, IDs or notes.
        </li>
        <li>
          <strong>Payment:</strong> handled by Stripe. We store a customer ID and
          invoice history, never card numbers.
        </li>
        <li>
          <strong>Operations and security:</strong> technical logs, including IP
          address, for a short period. Bot protection via Cloudflare Turnstile.
        </li>
        <li>
          <strong>Usage statistics:</strong> Vercel Analytics on kodovault.no —
          aggregated page-view statistics, no cookies and no profiling of
          individuals.
        </li>
        <li>
          <strong>Mailing list:</strong> your email address, if you sign up.
        </li>
        <li>
          <strong>Stored locally on your device:</strong> language preference and
          any biometric key (WebAuthn) in your browser. This is never sent to us.
        </li>
      </UL>

      <H2>3. Purpose and legal basis</H2>
      <UL>
        <li>Providing the service and managing your subscription — contract, GDPR art. 6(1)(b).</li>
        <li>Security, operations and abuse prevention — legitimate interest, art. 6(1)(f).</li>
        <li>Accounting — legal obligation, art. 6(1)(c).</li>
        <li>Mailing list — consent, art. 6(1)(a). You may withdraw it at any time.</li>
      </UL>

      <H2>4. Processors and where the data sits</H2>
      <UL>
        <li>
          <strong>Upstash</strong> — database. Vault data is stored in the EU
          (Frankfurt and Dublin).
        </li>
        <li>
          <strong>Vercel</strong> — hosting and operations (Frankfurt and
          Stockholm).
        </li>
        <li>
          <strong>Stripe</strong> — payment and invoicing.
        </li>
        <li>
          <strong>Resend</strong> — sending email.
        </li>
        <li>
          <strong>Cloudflare</strong> — bot protection at registration.
        </li>
      </UL>
      <p>
        <strong>Honest note on transfers to the US:</strong> the vault data itself
        sits in the EU and is encrypted wherever it is. But Stripe and Resend are
        US providers, so data such as your email address, name and payment details
        is processed partly in the US. These transfers rely on the EU Standard
        Contractual Clauses and the EU–US Data Privacy Framework. We say this
        plainly rather than writing “everything is in the EU”, because that would
        not be entirely true.
      </p>

      <H2>5. Retention</H2>
      <UL>
        <li>Account data and vault: until you delete your account.</li>
        <li>Invoices and accounting records: five years, per the Bookkeeping Act.</li>
        <li>Technical logs: a short period, normally up to 30 days.</li>
        <li>Mailing list: until you unsubscribe.</li>
      </UL>

      <H2>6. Deletion</H2>
      <p>
        You can permanently delete your vault and account yourself, from settings.
        Deletion is final. Accounting records are retained as described above
        because we are legally required to keep them.
      </p>

      <H2>7. Your rights</H2>
      <p>
        You have the right to access, rectification, erasure, restriction, data
        portability and to object to processing. You can exercise portability
        yourself: export the entire vault as an encrypted backup or as CSV, at any
        time.
      </p>
      <p>
        If you believe we process data unlawfully, you may complain to the{" "}
        <a
          className="underline underline-offset-2 hover:text-white"
          href="https://www.datatilsynet.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          Norwegian Data Protection Authority
        </a>
        .
      </p>

      <H2>8. Changes</H2>
      <p>We may update this policy. Material changes are announced by email.</p>
    </LegalLayout>
  );
}

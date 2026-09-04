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
        encrypted on your device before it reaches us, and we hold no key. Below is a
        precise account of what we <em>do</em> process — because it is not nothing.
      </p>

      <H2>1. Data controller</H2>
      <p>
        Me &amp; Max AS, company no. 987 607 882 MVA, Stigerbakken 7, 1348 Rykkinn, Norway. Contact:{" "}
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
          <strong>Vault contents:</strong> stored only as an encrypted blob. We cannot
          read passwords, cards, IDs or notes.
        </li>
        <li>
          <strong>Payment:</strong> handled by Stripe. We store a customer ID and
          invoice history, never card numbers.
        </li>
        <li>
          <strong>Event log:</strong> timestamps for sign-ins, failed attempts and
          changes to the vault. The log records <em>that</em> something happened,
          never what the vault contains.
        </li>
        <li>
          <strong>Operations and security:</strong> technical logs, including IP
          address. Bot protection via Cloudflare Turnstile, which also processes IP
          addresses.
        </li>
        <li>
          <strong>Usage statistics:</strong> Vercel Analytics on kodovault.no —
          aggregated page-view statistics, no cookies and no profiling of individuals.
        </li>
        <li>
          <strong>Mailing list:</strong> your email address, if you sign up.
        </li>
      </UL>

      <H2>3. Stored on your own device</H2>
      <p>Some things are stored only in your browser and never sent to us:</p>
      <UL>
        <li>Your language preference.</li>
        <li>
          <strong>Passkey (WebAuthn):</strong> if you enable Touch ID or Face ID, the
          credential ID, a salt and an encrypted copy of your master password are
          stored in your browser&rsquo;s local storage. The private key never leaves
          your device, and we register no passkey on the server. The unlock itself is
          recorded as an event (see section 2), but the key is not.
        </li>
      </UL>
      <p>
        This storage is strictly necessary for the service to work as you have
        requested, and therefore requires no consent under the Norwegian Electronic
        Communications Act § 3-15. We use no cookies for tracking or marketing.
      </p>

      <H2>4. Purpose and legal basis</H2>
      <UL>
        <li>Providing the service and managing your subscription — contract, GDPR art. 6(1)(b).</li>
        <li>Security, operations, event logging and abuse prevention — legitimate interest, art. 6(1)(f).</li>
        <li>Usage statistics on kodovault.no — legitimate interest, art. 6(1)(f).</li>
        <li>Accounting — legal obligation, art. 6(1)(c).</li>
        <li>Mailing list — consent, art. 6(1)(a). You may withdraw it at any time.</li>
      </UL>

      <H2>5. Processors</H2>
      <UL>
        <li>
          <strong>Upstash</strong> — database. Vault data is stored in Frankfurt, with
          an alternative read path via Dublin.
        </li>
        <li>
          <strong>Vercel</strong> — hosting and operations (Frankfurt and Stockholm).
          Processes IP addresses in server logs.
        </li>
        <li>
          <strong>Stripe</strong> — payment and invoicing.
        </li>
        <li>
          <strong>Resend</strong> — sending email. Processes your email address and the
          contents of transactional emails (notices and receipts).
        </li>
        <li>
          <strong>Cloudflare</strong> — bot protection at registration. Processes IP
          addresses.
        </li>
      </UL>

      <H2>6. Transfers to the US — plainly stated</H2>
      <p>
        <strong>All five providers above are US companies.</strong> The fact that
        Upstash stores data in Frankfurt does not change that the company is subject
        to US law — that is precisely what the Schrems II debate is about. We say so
        directly rather than claiming “everything is in the EU”.
      </p>
      <p>
        What protects you is not the jurisdiction but the mathematics:{" "}
        <strong>
          vault contents are encrypted on your device and are not readable by any of
          them
        </strong>
        . What they can process is metadata — email address, name, IP address and
        payment details — and this may be processed in the US.
      </p>
      <p>
        Transfers rely on the EU Standard Contractual Clauses (SCC). Several of the
        providers are, as of September 2026, all certified under the EU–US Data
        Privacy Framework. Certifications can change or lapse, so the SCC remain the
        mechanism we rely on.{" "}
        <strong>A copy of the standard clauses is available on request.</strong>
      </p>

      <H2>7. Retention</H2>
      <UL>
        <li>
          <strong>Account and vault:</strong> until you delete the account yourself,
          or 28 days after the vault was locked — whichever comes first. The vault is
          locked when the trial expires or a payment fails, and is deleted
          automatically 28 days later. You are warned by email 7 days before deletion,
          and you may export your data throughout that period (see section 10 of the{" "}
          <a className="underline underline-offset-2 hover:text-white" href="/terms">
            terms
          </a>
          ).
        </li>
        <li>
          <strong>Stripe customer ID:</strong> until the account is deleted.
        </li>
        <li>
          <strong>Invoices and accounting records:</strong> five years, per the
          Bookkeeping Act.
        </li>
        <li>
          <strong>Event log and technical logs:</strong> normally up to 30 days.
        </li>
        <li>
          <strong>Mailing list:</strong> until you unsubscribe.
        </li>
      </UL>

      <H2>8. Deletion</H2>
      <p>
        You can permanently delete your vault and account yourself, from settings.
        Deletion is final. Accounting records are retained as described above because
        we are legally required to keep them.
      </p>

      <H2>9. Your rights</H2>
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

      <H2>10. Changes</H2>
      <p>We may update this policy. Material changes are announced by email.</p>
    </LegalLayout>
  );
}

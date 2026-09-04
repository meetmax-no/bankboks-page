import type { Metadata } from "next";
import { LegalLayout, H2, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Purchase — Ko | Do · Vault",
  description: "Terms of purchase for Ko | Do · Vault.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Purchase"
      updated="Last updated 4 September 2026"
      note={
        <>
          English translation for convenience. In case of conflict, the{" "}
          <a className="underline underline-offset-2 hover:text-white" href="/vilkar">
            Norwegian version
          </a>{" "}
          governs.
        </>
      }
    >
      <p>
        These terms apply to the purchase and use of Ko | Do · Vault. By creating
        a vault you accept them.
      </p>

      <H2>1. Seller</H2>
      <p>
        Ko | Do · Vault is provided by <strong>Me &amp; Max AS</strong>, company
        no. 987 607 882 MVA, Oslo, Norway. Contact:{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        .
      </p>

      <H2>2. What the service is</H2>
      <p>
        Ko | Do · Vault is a browser-based, encrypted vault for passwords, payment
        cards and ID documents. All encryption and decryption happens locally on
        your device using AES-256-GCM, with the key derived from your master
        password via PBKDF2-SHA256 (600,000 iterations). We store only encrypted
        data and cannot read the contents.
      </p>

      <H2>3. Your master password — read this carefully</H2>
      <p>
        The master password is the only key to your vault. It never leaves your
        device, and <strong>we hold no copy and have no backdoor</strong>.
      </p>
      <UL>
        <li>If you forget it, your data is permanently lost.</li>
        <li>There is no password reset, no recovery and no support that can unlock the vault for you.</li>
        <li>You are responsible for storing the master password safely and for keeping backups.</li>
      </UL>
      <p>
        This is a deliberate design choice, not a shortcoming. It is the condition
        that makes it impossible for anyone else — including us — to read your
        data.
      </p>

      <H2>4. Free trial</H2>
      <p>
        The trial is free for 30 days and requires no card details. It does{" "}
        <strong>not</strong> convert automatically into a paid subscription. If
        you do not choose a paid plan, the vault is locked when the trial ends and
        the data is deleted after notice by email.
      </p>

      <H2>5. Prices and payment</H2>
      <UL>
        <li>Current prices are shown at kodovault.no. All prices include VAT.</li>
        <li>Payment is handled by Stripe. We never receive your card number.</li>
        <li>Subscriptions renew automatically until cancelled.</li>
        <li>Price changes are announced by email at least 30 days in advance.</li>
      </UL>

      <H2>6. Right of withdrawal</H2>
      <p>
        You have a 14-day right of withdrawal from the date of purchase under the
        Norwegian Right of Withdrawal Act. Contact{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>{" "}
        and we will refund you. No reason required.
      </p>

      <H2>7. Cancellation</H2>
      <p>
        You may cancel at any time through the Stripe customer portal. You keep
        access for the remainder of the paid period. We do not refund unused time
        beyond the right of withdrawal in section 6.
      </p>

      <H2>8. Deleting your data</H2>
      <p>
        You can permanently delete your vault and account yourself from settings.
        Deletion is final and cannot be undone. Invoices and accounting records are
        retained by Stripe for five years as required by the Norwegian Bookkeeping
        Act.
      </p>

      <H2>9. Availability and liability</H2>
      <p>
        We aim for high uptime but cannot guarantee uninterrupted availability. We
        reserve the right to downtime, maintenance and faults at subcontractors.
      </p>
      <p>
        Our total liability is limited to the amount you have paid for the service
        in the past twelve months. We are not liable for indirect losses, and{" "}
        <strong>
          not for data loss resulting from a forgotten master password or missing
          backups
        </strong>
        . These limitations do not apply in cases of gross negligence or intent,
        and do not limit your mandatory rights as a consumer.
      </p>

      <H2>10. Changes to these terms</H2>
      <p>
        We may change these terms. Material changes are announced by email at least
        30 days in advance. Continued use after that counts as acceptance.
      </p>

      <H2>11. Governing law and disputes</H2>
      <p>
        These terms are governed by Norwegian law. As a consumer you may bring a
        dispute before the Norwegian Consumer Authority or the Consumer Complaints
        Board. Legal venue is Oslo District Court.
      </p>
    </LegalLayout>
  );
}

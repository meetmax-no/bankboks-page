import type { Metadata } from "next";
import { LegalLayout, H2, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use and Purchase — Ko | Do · Vault",
  description: "Terms of use and purchase for Ko | Do · Vault.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use and Purchase"
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
        These terms apply to the use and purchase of Ko | Do · Vault. By creating a
        vault you accept them, including if you only use the free trial.
      </p>

      <H2>1. Seller</H2>
      <p>
        Ko | Do · Vault is provided by <strong>Me &amp; Max AS</strong>, company no.
        987 607 882 MVA, Stigerbakken 7, 1348 Rykkinn, Norway. Contact:{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        .
      </p>

      <H2>2. What the service is</H2>
      <p>
        Ko | Do · Vault is a browser-based, encrypted vault for passwords, payment
        cards and ID documents. All encryption and decryption happens locally on your
        device. We store only encrypted data and cannot read the contents.
      </p>
      <p>
        At present the key is derived using PBKDF2-SHA256 (600,000 iterations) and
        data is encrypted with AES-256-GCM. We may upgrade to stronger methods over
        time. Such changes will never weaken the security of the service.
      </p>

      <H2>3. Who may enter into this agreement</H2>
      <p>
        You must be 18 years old and have legal capacity to enter into this
        agreement. If you are under 18, the service may only be used with the consent
        of a guardian.
      </p>

      <H2>4. Your master password — read this carefully</H2>
      <p>
        The master password is the only key to your vault. It never leaves your
        device, and <strong>we hold no copy and have no backdoor</strong>.
      </p>
      <UL>
        <li>If you forget it, your data is permanently lost.</li>
        <li>There is no password reset, no recovery and no support that can unlock the vault for you.</li>
        <li>You are responsible for storing the master password safely and for keeping backups. See section 10 on export.</li>
      </UL>
      <p>
        This is a deliberate design choice, not a shortcoming. It is the condition
        that makes it impossible for anyone else — including us — to read your data.
      </p>

      <H2>5. Free trial</H2>
      <p>
        The trial is free for 30 days and requires no card details. It does{" "}
        <strong>not</strong> convert automatically into a paid subscription.
      </p>
      <UL>
        <li>We notify you by email 5 days before the trial expires.</li>
        <li>If you choose no paid plan, the vault is locked on expiry. A locked vault cannot be read or changed.</li>
        <li>The data is kept for 28 days after locking. You receive an email warning 7 days before deletion.</li>
        <li>After 28 days the data is permanently deleted. If you upgrade within the deadline, the vault reopens with its contents intact.</li>
      </UL>

      <H2>6. Prices and payment</H2>
      <UL>
        <li>Current prices are shown at kodovault.no. All prices include VAT.</li>
        <li>Payment is handled by Stripe. We never receive your card number.</li>
        <li>Subscriptions renew automatically until cancelled.</li>
        <li>
          Price changes are announced by email at least 30 days in advance. You may
          cancel before the change takes effect.
        </li>
      </UL>

      <H2>7. Right of withdrawal</H2>
      <p>
        You have a 14-day right of withdrawal from the date of purchase under the
        Norwegian Right of Withdrawal Act. Contact{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>{" "}
        and we will refund the full amount. No reason required, and we make no
        deduction for the period you have used the service.
      </p>

      <H2>8. If a payment fails</H2>
      <p>
        If a renewal fails, we retry the charge and notify you by email. If payment
        is still not completed, the vault is locked. The same deadlines then apply as
        for an expired trial: the data is kept for 28 days, with a warning 7 days
        before deletion. If you settle payment within the deadline, the vault reopens
        with its contents intact.
      </p>

      <H2>9. Cancellation</H2>
      <p>
        You may cancel at any time through the Stripe customer portal. You keep access
        for the remainder of the paid period. We do not refund unused time beyond the
        right of withdrawal in section 7.
      </p>

      <H2>10. Export and deletion of your data</H2>
      <p>
        As long as you have access to the vault, you may export the entire contents
        yourself at any time — either as an encrypted backup file, or as CSV in a
        Bitwarden-compatible format. We recommend exporting before a trial expires or
        a subscription ends.
      </p>
      <p>
        You may also permanently delete your vault and account from settings. Deletion
        is final and cannot be undone. Invoices and accounting records are retained by{" "}
        <strong>us</strong> for five years, because the Norwegian Bookkeeping Act
        requires it.
      </p>

      <H2>11. Privacy</H2>
      <p>
        How we process personal data is described in our{" "}
        <a className="underline underline-offset-2 hover:text-white" href="/privacy">
          privacy policy
        </a>
        . In short: vault contents are encrypted on your device and cannot be read by
        us. We use processors for operations, payment and email — among them Vercel
        (hosting), Upstash (database), Stripe (payment) and Resend (email). The policy
        contains the full list.
      </p>

      <H2>12. Availability and liability</H2>
      <p>
        We aim for high uptime but cannot guarantee uninterrupted availability. We
        reserve the right to downtime, maintenance and faults at subcontractors.
      </p>
      <p>
        Our total liability is limited to the amount you have paid for the service in
        the past twelve months. We are not liable for indirect losses, and{" "}
        <strong>
          not for data loss resulting from a forgotten master password or missing
          backups
        </strong>
        . These limitations do not apply in cases of gross negligence or intent, and
        do not limit your mandatory rights as a consumer.
      </p>

      <H2>13. Changes to these terms</H2>
      <p>
        We may change these terms. Material changes are announced by email at least 30
        days in advance, and you may cancel before the change takes effect. If you do
        not cancel, the new terms apply from that date.
      </p>

      <H2>14. Governing law and disputes</H2>
      <p>
        These terms are governed by Norwegian law. As a consumer you may complain to
        the Norwegian Consumer Authority, which mediates, and thereafter bring the
        matter before the Consumer Complaints Board. Legal venue is Oslo District
        Court, unless mandatory law provides otherwise.
      </p>
    </LegalLayout>
  );
}

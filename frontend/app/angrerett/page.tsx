import type { Metadata } from "next";
import { LegalLayout, H2, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Angreskjema — Ko | Do · Vault",
  description:
    "Lovbestemt angreskjema for Ko | Do · Vault, jf. angrerettloven § 8 første ledd bokstav h.",
  robots: { index: true, follow: true },
};

/**
 * Angrerettloven § 8 (1) h krever at standard angreskjema gjøres TILGJENGELIG
 * for forbrukeren ved avtaleinngåelse — en e-postadresse er ikke nok.
 * Konsekvensen av å mangle det er at angrefristen forlenges med inntil
 * 12 måneder (§ 21 tredje ledd). Derfor ligger skjemaet her, på vår egen side,
 * i stedet for som en ekstern lenke som kan råtne.
 *
 * Skjemaet følger malen i forbrukerrettighetsdirektivet vedlegg I B, slik
 * forskrift om opplysningsplikt og angrerett (FOR-2014-06-20-777) krever.
 */

/** Én utfyllingslinje i skjemaet — etikett over, skrivelinje under. */
function Field({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="pt-1">
      <div className="text-[13px] text-white/60">
        {label}
        {hint && <span className="text-white/35"> {hint}</span>}
      </div>
      <div className="mt-2 h-7 border-b border-dashed border-white/20" />
    </div>
  );
}

export default function AngrerettPage() {
  return (
    <LegalLayout
      title="Angreskjema"
      updated="Sist oppdatert 4. september 2026"
      note={
        <>
          Skjemaet hører til{" "}
          <a className="underline underline-offset-2 hover:text-white" href="/vilkar">
            vilkårene punkt 7
          </a>
          .
        </>
      }
    >
      <p>
        Dette er det lovbestemte angreskjemaet for kjøp av varer og tjenester som
        ikke er finansielle tjenester. Det ligger her fordi angrerettloven krever at
        vi gjør det tilgjengelig for deg — ikke fordi du må bruke det.
      </p>
      <p>
        <strong>Du er ikke pålagt å bruke skjemaet.</strong> Du kan melde fra om at
        du bruker angreretten på hvilken som helst måte. En vanlig e-post til{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>{" "}
        holder, og er den enkleste veien.
      </p>

      <H2>Skjema</H2>
      <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-8 space-y-6">
        <div>
          <p className="text-base font-semibold text-white">Angreskjema</p>
          <p className="text-[13px] text-white/50 mt-1">
            ved kjøp av varer og tjenester som ikke er finansielle tjenester
          </p>
          <p className="text-[13px] text-white/50 mt-2 italic">
            Fyll ut og returner dette skjemaet dersom du ønsker å gå fra avtalen.
          </p>
        </div>

        <div className="pt-1 border-t border-white/10">
          <div className="text-[13px] text-white/60 pt-5">Utfylt skjema sendes til:</div>
          <div className="mt-2 text-[15px] text-white/85 leading-relaxed">
            Me &amp; Max AS
            <br />
            Stigerbakken 7, 1348 Rykkinn, Norge
            <br />
            <a
              className="underline underline-offset-2 hover:text-white"
              href="mailto:kontakt@kodovault.no"
            >
              kontakt@kodovault.no
            </a>
          </div>
        </div>

        <div className="pt-5 border-t border-white/10">
          <p className="text-[15px] text-white/85 leading-relaxed">
            Jeg/vi underretter herved om at jeg/vi ønsker å gå fra min/vår avtale om
            levering av følgende tjeneste:{" "}
            <strong className="text-white">Ko | Do · Vault — abonnement</strong>
          </p>
        </div>

        <div className="space-y-5 pt-1">
          <Field label="Avtalen ble inngått den" hint="(dato)" />
          <Field label="Kvitterings- eller fakturanummer" hint="(hvis du har det for hånden)" />
          <Field label="Forbrukerens/forbrukernes navn" />
          <Field label="Forbrukerens/forbrukernes adresse" />
          <Field label="Forbrukerens/forbrukernes e-postadresse" />
          <Field label="Sted og dato" />
          <Field
            label="Forbrukerens/forbrukernes underskrift"
            hint="(kun dersom skjemaet leveres på papir)"
          />
        </div>
      </div>
      <p className="text-[13px] text-white/40">
        Tips: bruk utskriftsfunksjonen i nettleseren (Ctrl/Cmd + P) hvis du vil lagre
        skjemaet som PDF eller skrive det ut.
      </p>

      <H2>Kort om angreretten</H2>
      <UL>
        <li>Fristen er 14 dager fra kjøpsdato.</li>
        <li>Du må gi oss beskjed innen fristen. Du trenger ikke oppgi noen grunn.</li>
        <li>
          Vi refunderer hele beløpet, og trekker ikke fra for perioden du har brukt
          tjenesten.
        </li>
        <li>
          Fullstendige vilkår står i{" "}
          <a className="underline underline-offset-2 hover:text-white" href="/vilkar">
            vilkårene punkt 7
          </a>
          .
        </li>
      </UL>
      <p className="text-[13px] text-white/40">
        Skjemaet følger malen i forbrukerrettighetsdirektivet vedlegg I B, slik{" "}
        <a
          className="underline underline-offset-2 hover:text-white"
          href="https://lovdata.no/dokument/SF/forskrift/2014-06-20-777"
          target="_blank"
          rel="noopener"
        >
          forskrift om opplysningsplikt og angrerett
        </a>{" "}
        krever.
      </p>
    </LegalLayout>
  );
}

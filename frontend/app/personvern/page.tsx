import type { Metadata } from "next";
import { LegalLayout, H2, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Personvernerklæring — Ko | Do · Vault",
  description: "Hvordan Ko | Do · Vault behandler personopplysninger.",
  robots: { index: true, follow: true },
};

export default function PersonvernPage() {
  return (
    <LegalLayout
      title="Personvernerklæring"
      updated="Sist oppdatert 4. september 2026"
    >
      <p>
        <strong>Kort fortalt:</strong> vi kan ikke lese innholdet i vaulten din.
        Det krypteres på din enhet før det sendes til oss, og vi har ingen nøkkel.
        Under står det likevel presist hvilke opplysninger vi faktisk behandler —
        for det er ikke null.
      </p>

      <H2>1. Behandlingsansvarlig</H2>
      <p>
        Me &amp; Max AS, org.nr 987 607 882 MVA, Oslo, Norge. Kontakt:{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        .
      </p>

      <H2>2. Hva vi behandler</H2>
      <UL>
        <li>
          <strong>Konto:</strong> fornavn, etternavn, e-postadresse, valgt
          subdomene og språkvalg.
        </li>
        <li>
          <strong>Vault-innhold:</strong> lagres kun som kryptert blob. Vi kan
          ikke lese passord, kort, ID-er eller notater.
        </li>
        <li>
          <strong>Betaling:</strong> håndteres av Stripe. Vi lagrer kunde-ID og
          fakturahistorikk, aldri kortnummer.
        </li>
        <li>
          <strong>Drift og sikkerhet:</strong> tekniske logger, inkludert
          IP-adresse, i kort tid. Bot-beskyttelse via Cloudflare Turnstile.
        </li>
        <li>
          <strong>Bruksstatistikk:</strong> Vercel Analytics på kodovault.no —
          aggregert sidevisningsstatistikk uten informasjonskapsler og uten
          profilering av enkeltpersoner.
        </li>
        <li>
          <strong>Venteliste:</strong> e-postadressen din, hvis du melder deg på.
        </li>
        <li>
          <strong>Lagret lokalt hos deg:</strong> språkvalg og eventuell
          biometrisk nøkkel (WebAuthn) i nettleseren. Dette sendes aldri til oss.
        </li>
      </UL>

      <H2>3. Formål og rettslig grunnlag</H2>
      <UL>
        <li>Levere tjenesten og håndtere abonnementet — avtale, GDPR art. 6 (1) b.</li>
        <li>Sikkerhet, drift og misbruksbeskyttelse — berettiget interesse, art. 6 (1) f.</li>
        <li>Regnskap og bokføring — rettslig forpliktelse, art. 6 (1) c.</li>
        <li>Venteliste-e-post — samtykke, art. 6 (1) a. Du kan trekke det når som helst.</li>
      </UL>

      <H2>4. Databehandlere og hvor dataene ligger</H2>
      <UL>
        <li>
          <strong>Upstash</strong> — database. Vault-data lagres i EU (Frankfurt
          og Stockholm).
        </li>
        <li>
          <strong>Vercel</strong> — hosting og drift.
        </li>
        <li>
          <strong>Stripe</strong> — betaling og fakturering.
        </li>
        <li>
          <strong>Resend</strong> — utsending av e-post.
        </li>
        <li>
          <strong>Cloudflare</strong> — bot-beskyttelse ved registrering.
        </li>
      </UL>
      <p>
        <strong>Ærlig om overføring til USA:</strong> selve vault-dataene ligger i
        EU og er krypterte uansett hvor de befinner seg. Men Stripe og Resend er
        amerikanske leverandører, og opplysninger som e-postadresse, navn og
        betalingsinformasjon behandles derfor delvis i USA. Overføringene skjer på
        grunnlag av EUs standard personvernbestemmelser (SCC) og EU–US Data
        Privacy Framework. Vi sier dette rett ut i stedet for å skrive «alt ligger
        i EU», fordi det siste ikke ville vært helt sant.
      </p>

      <H2>5. Hvor lenge vi lagrer</H2>
      <UL>
        <li>Kontoopplysninger og vault: til du sletter kontoen.</li>
        <li>Fakturaer og regnskapsdata: fem år, jf. bokføringsloven.</li>
        <li>Tekniske logger: kort tid, normalt inntil 30 dager.</li>
        <li>Venteliste: til du melder deg av.</li>
      </UL>

      <H2>6. Sletting</H2>
      <p>
        Du kan slette vaulten og kontoen din permanent selv, fra innstillingene.
        Slettingen er endelig. Regnskapsdata beholdes som beskrevet over, fordi vi
        er lovpålagt å gjøre det.
      </p>

      <H2>7. Dine rettigheter</H2>
      <p>
        Du har rett til innsyn, retting, sletting, begrensning, dataportabilitet
        og til å protestere mot behandlingen. Dataportabilitet kan du utøve selv:
        eksporter hele vaulten som kryptert backup eller som CSV, når som helst.
      </p>
      <p>
        Mener du at vi behandler opplysninger i strid med regelverket, kan du
        klage til{" "}
        <a
          className="underline underline-offset-2 hover:text-white"
          href="https://www.datatilsynet.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datatilsynet
        </a>
        .
      </p>

      <H2>8. Endringer</H2>
      <p>
        Vi kan oppdatere denne erklæringen. Vesentlige endringer varsles på
        e-post.
      </p>
    </LegalLayout>
  );
}

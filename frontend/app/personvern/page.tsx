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
      note={<>Norsk versjon gjelder. <a className="underline underline-offset-2 hover:text-white" href="/privacy">English version →</a></>}
    >
      <p>
        <strong>Kort fortalt:</strong> vi kan ikke lese innholdet i vaulten din. Det
        krypteres på din enhet før det sendes til oss, og vi har ingen nøkkel. Under
        står det likevel presist hvilke opplysninger vi faktisk behandler — for det
        er ikke null.
      </p>

      <H2>1. Behandlingsansvarlig</H2>
      <p>
        Me &amp; Max AS, org.nr 987 607 882 MVA, Stigerbakken 7, 1348 Rykkinn, Norge. Kontakt:{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        .
      </p>

      <H2>2. Hva vi behandler</H2>
      <UL>
        <li>
          <strong>Konto:</strong> fornavn, etternavn, e-postadresse, valgt subdomene
          og språkvalg.
        </li>
        <li>
          <strong>Vault-innhold:</strong> lagres kun som kryptert blob. Vi kan ikke
          lese passord, kort, ID-er eller notater.
        </li>
        <li>
          <strong>Betaling:</strong> håndteres av Stripe. Vi lagrer kunde-ID og
          fakturahistorikk, aldri kortnummer.
        </li>
        <li>
          <strong>Hendelseslogg:</strong> tidspunkt for pålogginger, mislykkede
          forsøk og endringer i vaulten. Loggen viser <em>at</em> noe skjedde, aldri
          hva som ligger i vaulten.
        </li>
        <li>
          <strong>Drift og sikkerhet:</strong> tekniske logger, inkludert
          IP-adresse. Bot-beskyttelse via Cloudflare Turnstile, som også behandler
          IP-adresse.
        </li>
        <li>
          <strong>Bruksstatistikk:</strong> Vercel Analytics på kodovault.no —
          aggregert sidevisningsstatistikk uten informasjonskapsler og uten
          profilering av enkeltpersoner.
        </li>
        <li>
          <strong>Venteliste:</strong> e-postadressen din, hvis du melder deg på.
        </li>
      </UL>

      <H2>3. Lagret på din egen enhet</H2>
      <p>
        Noe lagres bare lokalt i nettleseren din og sendes aldri til oss:
      </p>
      <UL>
        <li>Språkvalget ditt.</li>
        <li>
          <strong>Passkey (WebAuthn):</strong> aktiverer du Touch ID eller Face ID,
          lagres credential-ID, salt og en kryptert kopi av master-passordet i
          nettleserens lokale lagring. Den private nøkkelen forlater aldri enheten,
          og vi registrerer ingen passkey på serveren. Selve opplåsingen logges som
          en hendelse (se punkt 2), men nøkkelen gjør det ikke.
        </li>
      </UL>
      <p>
        Denne lagringen er strengt nødvendig for at tjenesten skal fungere slik du
        har bedt om, og krever derfor ikke samtykke etter ekomloven § 3-15. Vi bruker
        ingen informasjonskapsler til sporing eller markedsføring.
      </p>

      <H2>4. Formål og rettslig grunnlag</H2>
      <UL>
        <li>Levere tjenesten og håndtere abonnementet — avtale, GDPR art. 6 (1) b.</li>
        <li>Sikkerhet, drift, hendelseslogg og misbruksbeskyttelse — berettiget interesse, art. 6 (1) f.</li>
        <li>Bruksstatistikk på kodovault.no — berettiget interesse, art. 6 (1) f.</li>
        <li>Regnskap og bokføring — rettslig forpliktelse, art. 6 (1) c.</li>
        <li>Venteliste-e-post — samtykke, art. 6 (1) a. Du kan trekke det når som helst.</li>
      </UL>

      <H2>5. Databehandlere</H2>
      <UL>
        <li>
          <strong>Upstash</strong> — database. Vault-data lagres i Frankfurt, med en
          alternativ lesevei via Dublin.
        </li>
        <li>
          <strong>Vercel</strong> — hosting og drift (Frankfurt og Stockholm).
          Behandler IP-adresser i serverlogger.
        </li>
        <li>
          <strong>Stripe</strong> — betaling og fakturering.
        </li>
        <li>
          <strong>Resend</strong> — utsending av e-post. Behandler e-postadressen din
          og innholdet i transaksjonelle e-poster (varsler og kvitteringer).
        </li>
        <li>
          <strong>Cloudflare</strong> — bot-beskyttelse ved registrering. Behandler
          IP-adresse.
        </li>
      </UL>

      <H2>6. Overføring til USA — helt ærlig</H2>
      <p>
        <strong>Alle fem leverandørene over er amerikanske selskaper.</strong> At
        Upstash lagrer data i Frankfurt, endrer ikke at selskapet er underlagt
        amerikansk lovgivning — det er nettopp det Schrems II-diskusjonen handler om.
        Vi skriver det rett ut i stedet for å si «alt ligger i EU».
      </p>
      <p>
        Det som beskytter deg er ikke jurisdiksjonen, men matematikken:{" "}
        <strong>
          vault-innholdet er kryptert på din enhet og er ikke lesbart for noen av
          dem
        </strong>
        . Det de kan behandle er metadata — e-postadresse, navn, IP-adresse og
        betalingsopplysninger — og dette kan behandles i USA.
      </p>
      <p>
        Overføringene skjer på grunnlag av EUs standard personvernbestemmelser
        (SCC). Per september 2026 er alle fem leverandørene i tillegg sertifisert
        under EU–US Data Privacy Framework. Sertifiseringer kan endres eller
        bortfalle, og SCC er derfor det bærende grunnlaget vi støtter oss på.{" "}
        <strong>Kopi av standardbestemmelsene kan fås ved henvendelse til oss.</strong>
      </p>

      <H2>7. Hvor lenge vi lagrer</H2>
      <UL>
        <li>
          <strong>Konto og vault:</strong> til du sletter kontoen selv. Vaulten
          slettes også automatisk 28 dager etter at den er låst — enten fordi
          prøveperioden utløp eller fordi en betaling ikke gikk gjennom. Du varsles
          på e-post 7 dager før.
        </li>
        <li>
          <strong>Stripe kunde-ID:</strong> til kontoen slettes.
        </li>
        <li>
          <strong>Fakturaer og regnskapsdata:</strong> fem år, jf. bokføringsloven.
        </li>
        <li>
          <strong>Hendelseslogg og tekniske logger:</strong> normalt inntil 30 dager.
        </li>
        <li>
          <strong>Venteliste:</strong> til du melder deg av.
        </li>
      </UL>

      <H2>8. Sletting</H2>
      <p>
        Du kan slette vaulten og kontoen din permanent selv, fra innstillingene.
        Slettingen er endelig. Regnskapsdata beholdes som beskrevet over, fordi vi er
        lovpålagt å gjøre det.
      </p>

      <H2>9. Dine rettigheter</H2>
      <p>
        Du har rett til innsyn, retting, sletting, begrensning, dataportabilitet og
        til å protestere mot behandlingen. Dataportabilitet kan du utøve selv:
        eksporter hele vaulten som kryptert backup eller som CSV, når som helst.
      </p>
      <p>
        Mener du at vi behandler opplysninger i strid med regelverket, kan du klage
        til{" "}
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

      <H2>10. Endringer</H2>
      <p>
        Vi kan oppdatere denne erklæringen. Vesentlige endringer varsles på e-post.
      </p>
    </LegalLayout>
  );
}

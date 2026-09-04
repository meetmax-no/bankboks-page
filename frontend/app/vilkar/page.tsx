import type { Metadata } from "next";
import { LegalLayout, H2, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Vilkår for bruk og kjøp — Ko | Do · Vault",
  description: "Vilkår for bruk og kjøp av Ko | Do · Vault.",
  robots: { index: true, follow: true },
};

export default function VilkarPage() {
  return (
    <LegalLayout
      title="Vilkår for bruk og kjøp"
      updated="Sist oppdatert 4. september 2026"
      note={<>Norsk versjon gjelder. <a className="underline underline-offset-2 hover:text-white" href="/terms">English version →</a></>}
    >
      <p>
        Disse vilkårene gjelder for bruk og kjøp av Ko | Do · Vault. Ved å
        opprette en vault aksepterer du vilkårene, også hvis du bare bruker den
        gratis prøveperioden.
      </p>

      <H2>1. Selger</H2>
      <p>
        Ko | Do · Vault leveres av <strong>Me &amp; Max AS</strong>, org.nr
        987 607 882 MVA, Stigerbakken 7, 1348 Rykkinn, Norge. Kontakt:{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        .
      </p>

      <H2>2. Hva tjenesten er</H2>
      <p>
        Ko | Do · Vault er en nettbasert, kryptert vault for passord, betalings­kort
        og ID-dokumenter. Tjenesten kjører i nettleseren din, og all kryptering og
        dekryptering skjer lokalt på din enhet. Vi lagrer kun krypterte data og kan
        ikke lese innholdet.
      </p>
      <p>
        Per i dag utledes nøkkelen med PBKDF2-SHA256 (600 000 iterasjoner), og
        dataene krypteres med AES-256-GCM. Vi kan oppgradere til sterkere metoder
        over tid. Slike endringer vil aldri svekke sikkerheten i tjenesten.
      </p>

      <H2>3. Hvem kan inngå avtalen</H2>
      <p>
        Du må være 18 år og ha rettslig handleevne for å inngå avtalen. Er du under
        18 år, må en foresatt inngå avtalen på dine vegne. Den foresatte er da
        avtalepart og ansvarlig for abonnementet.
      </p>

      <H2>4. Master-passordet — les dette nøye</H2>
      <p>
        Master-passordet er den eneste nøkkelen til vaulten din. Det forlater aldri
        enheten din, og <strong>vi har ingen kopi og ingen bakdør</strong>.
      </p>
      <UL>
        <li>Glemmer du master-passordet, er dataene tapt permanent.</li>
        <li>Det finnes ingen «glemt passord»-funksjon, ingen gjenoppretting og ingen support som kan låse opp vaulten for deg.</li>
        <li>Du er selv ansvarlig for å oppbevare master-passordet forsvarlig og for å ta backup. Se punkt 10 om eksport.</li>
      </UL>
      <p>
        Dette er et bevisst designvalg, ikke en mangel. Det er forutsetningen for at
        ingen andre — heller ikke vi — kan lese dataene dine.
      </p>

      <H2>5. Prøveperiode</H2>
      <p>
        Prøveperioden er gratis i 30 dager og krever ingen kortinformasjon. Den går{" "}
        <strong>ikke</strong> automatisk over til et betalt abonnement.
      </p>
      <UL>
        <li>Vi varsler deg på e-post 5 dager før prøveperioden utløper.</li>
        <li>Velger du ingen betalt plan, låses vaulten ved utløp. En låst vault kan ikke brukes — du kan verken lese eller endre innholdet.</li>
        <li>Du kan likevel få ut dataene dine i hele 28-dagersperioden, uten å betale. Se punkt 10.</li>
        <li>Dataene beholdes i 28 dager etter låsing. Du får varsel på e-post 7 dager før sletting.</li>
        <li>Etter 28 dager slettes dataene permanent. Oppgraderer du innen fristen, gjenåpnes vaulten med innholdet i behold.</li>
      </UL>

      <H2>6. Priser og betaling</H2>
      <UL>
        <li>Gjeldende priser vises på kodovault.no. Alle priser er oppgitt inkl. mva.</li>
        <li>Betaling håndteres av Stripe. Vi mottar aldri kortnummeret ditt.</li>
        <li>Abonnementet fornyes automatisk til det sies opp.</li>
        <li>
          Prisendringer varsles på e-post minst 30 dager før de trer i kraft. Du kan
          si opp abonnementet før endringen trer i kraft.
        </li>
      </UL>

      <H2>7. Angrerett</H2>
      <p>
        Du har 14 dagers angrerett fra kjøpsdato etter angrerettloven. Ta kontakt på{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        , så refunderer vi hele beløpet. Du trenger ikke oppgi noen grunn, og vi
        trekker ikke fra for perioden du har brukt tjenesten.
      </p>
      <p>
        Du kan melde fra på hvilken som helst måte — en vanlig e-post er nok. Ønsker
        du å bruke det lovbestemte skjemaet, finner du det her:{" "}
        <a className="underline underline-offset-2 hover:text-white" href="/angrerett">
          angreskjema
        </a>
        .
      </p>

      <H2>8. Hvis en betaling ikke går gjennom</H2>
      <p>
        Feiler en fornyelse, forsøker vi å belaste på nytt og varsler deg på e-post.
        Blir betalingen ikke gjennomført, låses vaulten. Deretter gjelder de samme
        fristene som ved utløpt prøveperiode: dataene beholdes i 28 dager, med
        varsel 7 dager før sletting. Ordner du betalingen innen fristen, gjenåpnes
        vaulten med innholdet i behold.
      </p>

      <H2>9. Oppsigelse</H2>
      <p>
        Du kan si opp når som helst via Stripe kundeportal. Du beholder tilgangen ut
        den betalte perioden. Vi refunderer ikke gjenstående tid ved oppsigelse
        utover angreretten i punkt 7.
      </p>

      <H2>10. Eksport og sletting av data</H2>
      <p>
        Så lenge du har tilgang til vaulten, kan du når som helst eksportere hele
        innholdet selv — enten som kryptert backup-fil, eller som CSV i
        Bitwarden-kompatibelt format. Vi anbefaler at du eksporterer jevnlig, ikke
        først når en frist nærmer seg.
      </p>
      <p>
        <strong>Dette gjelder også når vaulten er låst.</strong> I hele
        28-dagersperioden før sletting har du rett til å få ut dataene dine uten å
        betale — enten direkte i appen, eller ved å be oss om den krypterte fila på{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        . Det er dine data. At vi ikke kan lese dem, betyr ikke at vi skal holde dem
        tilbake — dekrypteringen skjer uansett lokalt på din enhet, med
        master-passordet ditt.
      </p>
      <p>
        Du kan også slette vaulten og kontoen din permanent fra innstillingene.
        Slettingen er endelig og kan ikke angres. Fakturaer og regnskapsdata beholder{" "}
        <strong>vi</strong> i fem år, fordi bokføringsloven krever det.
      </p>

      <H2>11. Personvern</H2>
      <p>
        Hvordan vi behandler personopplysninger står i{" "}
        <a className="underline underline-offset-2 hover:text-white" href="/personvern">
          personvernerklæringen
        </a>
        . Kort oppsummert: vault-innholdet er kryptert på din enhet og kan ikke
        leses av oss. Vi bruker databehandlere til drift, betaling og e-post — blant
        andre Vercel (hosting), Upstash (database), Stripe (betaling) og Resend
        (e-post). Fullstendig oversikt finnes i erklæringen.
      </p>

      <H2>12. Tilgjengelighet og ansvar</H2>
      <p>
        Vi tilstreber høy oppetid, men kan ikke garantere at tjenesten alltid er
        tilgjengelig. Vi tar forbehold om driftsavbrudd, vedlikehold og feil hos
        underleverandører.
      </p>
      <p>
        Vårt samlede erstatningsansvar er begrenset til det du har betalt for
        tjenesten de siste tolv månedene. Vi er ikke ansvarlige for indirekte tap,
        og{" "}
        <strong>
          ikke for tap av data som følge av glemt master-passord eller manglende
          backup
        </strong>
        . Begrensningene gjelder ikke ved grov uaktsomhet eller forsett, og begrenser
        ikke dine ufravikelige rettigheter som forbruker.
      </p>

      <H2>13. Endringer i vilkårene</H2>
      <p>
        Vi kan endre vilkårene. Vesentlige endringer varsles på e-post minst 30 dager
        før de trer i kraft, og du kan si opp abonnementet før endringen gjelder.
        Sier du ikke opp, gjelder de nye vilkårene fra ikrafttredelsen.
      </p>

      <H2>14. Lovvalg og tvister</H2>
      <p>
        Vilkårene reguleres av norsk rett. Er du forbruker, kan du klage til
        Forbrukertilsynet, som mekler i saken, og deretter eventuelt bringe den inn
        for Forbrukerklageutvalget. Verneting er Oslo tingrett, med mindre annet
        følger av ufravikelig lov.
      </p>
    </LegalLayout>
  );
}

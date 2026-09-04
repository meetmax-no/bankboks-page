import type { Metadata } from "next";
import { LegalLayout, H2, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Kjøpsvilkår — Ko | Do · Vault",
  description: "Kjøpsvilkår for Ko | Do · Vault.",
  robots: { index: true, follow: true },
};

export default function VilkarPage() {
  return (
    <LegalLayout title="Kjøpsvilkår" updated="Sist oppdatert 4. september 2026">
      <p>
        Disse vilkårene gjelder for kjøp og bruk av Ko | Do · Vault. Ved å
        opprette en vault aksepterer du vilkårene.
      </p>

      <H2>1. Selger</H2>
      <p>
        Ko | Do · Vault leveres av <strong>Me &amp; Max AS</strong>, org.nr
        987 607 882 MVA, Oslo, Norge. Kontakt:{" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>
        .
      </p>

      <H2>2. Hva tjenesten er</H2>
      <p>
        Ko | Do · Vault er en nettbasert, kryptert vault for passord, betalings­kort
        og ID-dokumenter. Tjenesten kjører i nettleseren din. All kryptering og
        dekryptering skjer lokalt på din enhet med AES-256-GCM, og nøkkelen
        utledes fra master-passordet ditt med PBKDF2-SHA256 (600 000 iterasjoner).
        Vi lagrer kun krypterte data og kan ikke lese innholdet.
      </p>

      <H2>3. Master-passordet — les dette nøye</H2>
      <p>
        Master-passordet er den eneste nøkkelen til vaulten din. Det forlater
        aldri enheten din, og <strong>vi har ingen kopi og ingen bakdør</strong>.
      </p>
      <UL>
        <li>Glemmer du master-passordet, er dataene tapt permanent.</li>
        <li>Det finnes ingen «glemt passord»-funksjon, ingen gjenoppretting og ingen support som kan låse opp vaulten for deg.</li>
        <li>Du er selv ansvarlig for å oppbevare master-passordet forsvarlig og for å ta backup av vaulten.</li>
      </UL>
      <p>
        Dette er et bevisst designvalg, ikke en mangel. Det er forutsetningen for
        at ingen andre — heller ikke vi — kan lese dataene dine.
      </p>

      <H2>4. Prøveperiode</H2>
      <p>
        Prøveperioden er gratis i 30 dager og krever ingen kortinformasjon.
        Prøveperioden går <strong>ikke</strong> automatisk over til et betalt
        abonnement. Velger du ikke en betalt plan, låses vaulten ved utløp, og
        data slettes etter varsel per e-post.
      </p>

      <H2>5. Priser og betaling</H2>
      <UL>
        <li>Gjeldende priser vises på kodovault.no.</li>
        <li>Betaling håndteres av Stripe. Vi mottar aldri kortnummeret ditt.</li>
        <li>Abonnementet fornyes automatisk til det sies opp.</li>
        <li>Prisendringer varsles på e-post minst 30 dager før de trer i kraft.</li>
      </UL>

      <H2>6. Angrerett</H2>
      <p>
        Du har 14 dagers angrerett fra kjøpsdato etter angrerettloven. Ta kontakt
        på {" "}
        <a className="underline underline-offset-2 hover:text-white" href="mailto:kontakt@kodovault.no">
          kontakt@kodovault.no
        </a>{" "}
        , så refunderer vi beløpet. Du trenger ikke oppgi noen grunn.
      </p>

      <H2>7. Oppsigelse</H2>
      <p>
        Du kan si opp når som helst via Stripe kundeportal. Du beholder tilgangen
        ut den betalte perioden. Vi refunderer ikke gjenstående tid ved oppsigelse
        utover angreretten i punkt 6.
      </p>

      <H2>8. Sletting av data</H2>
      <p>
        Du kan når som helst slette vaulten og kontoen din permanent fra
        innstillingene. Slettingen er endelig og kan ikke angres. Fakturaer og
        regnskapsdata beholdes hos Stripe i fem år som følge av bokføringsloven.
      </p>

      <H2>9. Tilgjengelighet og ansvar</H2>
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
        . Begrensningene gjelder ikke ved grov uaktsomhet eller forsett, og
        begrenser ikke dine ufravikelige rettigheter som forbruker.
      </p>

      <H2>10. Endringer i vilkårene</H2>
      <p>
        Vi kan endre vilkårene. Vesentlige endringer varsles på e-post minst 30
        dager før de trer i kraft. Fortsatt bruk etter dette regnes som aksept.
      </p>

      <H2>11. Lovvalg og tvister</H2>
      <p>
        Vilkårene reguleres av norsk rett. Er du forbruker, kan du bringe en tvist
        inn for Forbrukertilsynet eller Forbrukerklageutvalget. Verneting er Oslo
        tingrett.
      </p>
    </LegalLayout>
  );
}

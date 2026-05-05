/**
 * i18n — Norsk + engelsk strenger.
 *
 * Bærende bjelke: "Lean Security · Not Security as a Service"
 * Stemmen er PERSONLIG (1. person) men HUMBLE — vi sammenligner aldri
 * med andre, vi snakker bare om hva Ko | Do ER.
 */

export type Locale = "nb" | "en";

export const LOCALES: Locale[] = ["nb", "en"];

export const STRINGS = {
  nb: {
    // Hero — Lean Security som bærende bjelke
    heroEyebrow: "Bygget i Oslo · Hosted i Europa",
    heroTitle: "Lean Security.",
    heroTitleAccent: "Not Security as a Service.",
    heroSubtitle:
      "En personlig passord-vault. Bygget for én bruker av gangen. Et design utelukkende styrt av hensynet til din sikkerhet.",
    heroSubtitle2:
      "Ingen eksterne investorer. Ingen oppblåste funksjoner. Kun kompromissløs kryptografi.",
    heroCta: "Send meg én mail",
    heroSecondary: "Les hvorfor",
    heroSignature: "— Michael, februar 2026",

    // Problem — tre prinsipper, uten sammenligning
    problemEyebrow: "Tre prinsipper",
    problemTitle: "Dette er hugget i stein.",
    problemSub:
      "Disse tre står fast. Annet kan videreutvikles.",
    problemCardTitle1: "Du eier dataene dine",
    problemCardBody1:
      "All data lagres utelukkende på servere i EU. 100 % Schrems II-kompatibel. Eksporter alt til JSON eller backup-fil når du vil. Ingen lock-in, og absolutt ingen kompromisser med din data-suverenitet.",
    problemCardTitle2: "Zero-knowledge",
    problemCardBody2:
      "Master-passordet forlater aldri din enhet. Hele hvelvet krypteres lokalt med AES-256-GCM. Serveren ser utelukkende krypterte bytes. Ingen bakdører. Ingen systemtilgang for noen.",
    problemCardTitle3: "100% eller null",
    problemCardBody3:
      "Hvis en funksjon kun er 95 % sikker, bygges den ikke. Ingen \"husk meg i 30 dager\". Ingen recovery-spørsmål. Ingen passord-hint. Ingen falsk trygghet.",

    // Architecture
    archEyebrow: "Hvordan det funker",
    archTitle: "Hybrid arkitektur. Ren kryptografi.",
    archBody:
      "Master-passordet stretches gjennom 600 000 PBKDF2-iterasjoner og brukes til å kryptere hele vault-arrayet som ÉN binær blob. Upstash Redis lagrer kun {salt, iv, cipher}. WebAuthn PRF wrapper master-passordet lokalt for Touch/Face ID-innlogging.",
    archImageAlt: "Ko | Do Vault arkitektur — hybrid mellom ren klient-side og minimal server",
    archCaption:
      "Vault-data finnes kun i én form på serveren: kryptert. Ingen hos oss kan lese den. Vercel kan ikke lese den. Upstash kan ikke lese den. Uten din nøkkel er dataene verdiløse.",

    // North Star
    northEyebrow: "Det styrende prinsipp",
    northQuote:
      "Spørsmålet er om det skal være 100% eller 95% — og svaret er 100%, ellers synker vi en eller annen dag, du vet bare ikke når.",
    northAuthor: "Michael Aagreen, februar 2026",
    northBody:
      "Hver beslutning testes mot dette: Er sikkerheten matematisk garantert, eller stoler vi på at noen oppfører seg pent? Hvis det er tvil — bygges det ikke.",

    // Roadmap
    roadmapEyebrow: "Hva som kommer",
    roadmapTitle: "Arkitektonisk veikart.",
    roadmapSub:
      "Versjon for versjon. Ingenting slippes før det er 100 % fullført. Tidsfrister viker alltid for sikkerhet.",
    v3_0Title: "Bankkort og virtuelle kort",
    v3_0Body:
      "Egen kryptert arkitektur for alle typer betalingskort. Inkluderer en fullstendig isolert kamerafunksjon for skanning — bildet går rett i hvelvet, og berører aldri telefonens bildegalleri eller iCloud.",
    v3_1Title: "2FA TOTP integrert",
    v3_1Body:
      "Tidsbaserte engangskoder genereres direkte i hvelvet. Ved tap eller bytte av enhet, er alle kodene dine umiddelbart tilgjengelige via din master-nøkkel. Ingen separat authenticator-app kreves.",
    v4_0Title: "Sikker overlevering",
    v4_0Body:
      "Engangspakker (.kodoenc). Krypter dokumenter for én spesifikk mottaker. Null server-involvering. Nøyaktig den samme sikkerheten som PGP, strippet for all friksjon.",
    v4_5Title: "Dokument-laget",
    v4_5Body:
      "Bring Your Own Storage (BYO). Google Drive, Dropbox eller en lokal USB. En virtuell, sikker disk for notater, PDF-er og dokumenter. Mountes med master-passordet, demonteres umiddelbart ved auto-lås.",

    // Waitlist
    waitlistEyebrow: "Bli den første som får vite",
    waitlistTitle: "Send meg én mail.",
    waitlistSub:
      "Du mottar nøyaktig én e-post den dagen v3.0 er operativ. Ingen nyhetsbrev. Ingen markedsføring. Ingen oppfølging.",
    waitlistEmailPlaceholder: "din@epost.no",
    waitlistButton: "Meld meg på",
    waitlistButtonLoading: "Sender...",
    waitlistSuccess: "Du er på lista. Sjekk innboksen.",
    waitlistError: "Noe gikk galt. Prøv igjen om litt.",
    waitlistInvalidEmail: "Ugyldig e-postadresse",
    waitlistAlready: "Du står allerede på lista. Takk!",
    waitlistConsent:
      "E-postadressen brukes utelukkende til dette ene varselet. Absolutt ingen tredjeparts-deling.",

    // Welcome email
    emailSubject: "Velkommen på Ko | Do · Vault-lista",
    emailGreeting: "Takk!",
    emailBody1:
      "Du er på lista. Jeg sier fra når v3.0 er klar — sannsynligvis i løpet av våren 2026.",
    emailBody2:
      "Ko | Do · Vault bygges fra grunnen av med ett prinsipp: 100% eller null. Lean Security · Not Security as a Service.",
    emailBody3:
      "Har du spørsmål? Bare svar på denne mailen — den går rett til meg.",
    emailSign: "Ha en strålende dag videre,",
    emailSignName: "Michael Aagreen",
    emailSignTitle: "Ko | Do Vault",

    // Footer
    footerLine1: "Ko | Do · Vault",
    footerLine2: "Arkitektur av Michael Aagreen",
    footerLine3: "Bygget i Norge · Drevet av Upstash i EU · Hosted i EU",
    footerStatus: "Kommer snart",

    // Misc
    skipToContent: "Hopp til innhold",
    languageNorwegian: "Norsk",
    languageEnglish: "Engelsk",
  },

  en: {
    heroEyebrow: "Built in Oslo · Hosted in Europe",
    heroTitle: "Lean Security.",
    heroTitleAccent: "Not Security as a Service.",
    heroSubtitle:
      "A personal password vault. Built for one user at a time. A design driven exclusively by your security.",
    heroSubtitle2:
      "No external investors. No bloated features. Only uncompromising cryptography.",
    heroCta: "Send me an email",
    heroSecondary: "Read why",
    heroSignature: "— Michael, February 2026",

    problemEyebrow: "Three principles",
    problemTitle: "This is set in stone.",
    problemSub:
      "These three stand firm. The rest can evolve.",
    problemCardTitle1: "You own your data",
    problemCardBody1:
      "All data is stored exclusively on servers in the EU. 100% Schrems II-compatible. Export everything to JSON or backup file whenever you want. No lock-in, and absolutely no compromises on your data sovereignty.",
    problemCardTitle2: "Zero-knowledge",
    problemCardBody2:
      "Your master password never leaves your device. The entire vault is encrypted locally with AES-256-GCM. The server sees only encrypted bytes. No backdoors. No system access for anyone.",
    problemCardTitle3: "100% or nothing",
    problemCardBody3:
      "If a feature is only 95% secure, it won't be built. No \"remember me for 30 days\". No recovery questions. No password hints. No false security.",

    archEyebrow: "How it works",
    archTitle: "Hybrid architecture. Pure cryptography.",
    archBody:
      "Your master password is stretched through 600,000 PBKDF2 iterations and used to encrypt the entire vault array as a single binary blob. Upstash Redis stores only {salt, iv, cipher}. WebAuthn PRF wraps the master password locally for Touch/Face ID login.",
    archImageAlt: "Ko | Do Vault architecture — hybrid between pure client-side and minimal server",
    archCaption:
      "Vault data exists in only one form on the server: encrypted. No one on our side can read it. Vercel can't read it. Upstash can't read it. Without your key, the data is worthless.",

    northEyebrow: "The guiding principle",
    northQuote:
      "The question is whether it should be 100% or 95% — and the answer is 100%, otherwise we sink one day, you just don't know when.",
    northAuthor: "Michael Aagreen, February 2026",
    northBody:
      "Every decision is tested against this: Is the security mathematically guaranteed, or are we trusting that someone behaves nicely? If in doubt — it won't be built.",

    roadmapEyebrow: "What's coming",
    roadmapTitle: "Architectural roadmap.",
    roadmapSub:
      "Version by version. Nothing ships until it's 100% complete. Deadlines always yield to security.",
    v3_0Title: "Debit and virtual cards",
    v3_0Body:
      "Dedicated encrypted architecture for all types of payment cards. Includes a fully isolated camera function for scanning — the image goes straight to the vault, never touching the phone's photo gallery or iCloud.",
    v3_1Title: "2FA TOTP integrated",
    v3_1Body:
      "Time-based one-time codes generated directly in the vault. If you lose or switch devices, all your codes are instantly available via your master key. No separate authenticator app required.",
    v4_0Title: "Secure handoff",
    v4_0Body:
      "One-time packages (.kodoenc). Encrypt documents for one specific recipient. Zero server involvement. The exact same security as PGP, stripped of all friction.",
    v4_5Title: "Document layer",
    v4_5Body:
      "Bring Your Own Storage (BYO). Google Drive, Dropbox, or a local USB. A virtual, secure disk for notes, PDFs and documents. Mounted with the master password, dismounted instantly on auto-lock.",

    waitlistEyebrow: "Be the first to know",
    waitlistTitle: "Send me an email.",
    waitlistSub:
      "You'll receive exactly one email the day v3.0 goes live. No newsletter. No marketing. No follow-ups.",
    waitlistEmailPlaceholder: "you@email.com",
    waitlistButton: "Sign me up",
    waitlistButtonLoading: "Sending...",
    waitlistSuccess: "You're on the list. Check your inbox.",
    waitlistError: "Something went wrong. Try again shortly.",
    waitlistInvalidEmail: "Invalid email address",
    waitlistAlready: "You're already on the list. Thanks!",
    waitlistConsent:
      "Your email address is used solely for this single notification. Absolutely no third-party sharing.",

    emailSubject: "Welcome to the Ko | Do · Vault list",
    emailGreeting: "Thank you!",
    emailBody1:
      "You're on the list. I'll let you know when v3.0 ships — likely during spring 2026.",
    emailBody2:
      "Ko | Do · Vault is built from the ground up on one principle: 100% or nothing. Lean Security · Not Security as a Service.",
    emailBody3:
      "Got questions? Just reply to this email — it goes straight to me.",
    emailSign: "Have a brilliant day,",
    emailSignName: "Michael Aagreen",
    emailSignTitle: "Ko | Do Vault",

    footerLine1: "Ko | Do · Vault",
    footerLine2: "Architecture by Michael Aagreen",
    footerLine3: "Built in Norway · Powered by Upstash in the EU · Hosted in the EU",
    footerStatus: "Coming soon",

    skipToContent: "Skip to content",
    languageNorwegian: "Norwegian",
    languageEnglish: "English",
  },
} as const;

export type StringKey = keyof typeof STRINGS.nb;

export function t(locale: Locale, key: StringKey): string {
  return STRINGS[locale][key] ?? STRINGS.nb[key] ?? key;
}

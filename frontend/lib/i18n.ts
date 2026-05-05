/**
 * i18n — Norsk + engelsk strenger.
 *
 * Bærende bjelke: "Lean Security · Not Security as a Service"
 * Stemmen er PERSONLIG (1. person) men HUMBLE — vi sammenligner aldri
 * med andre, vi snakker bare om hva Ko|Do ER.
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
    archImageAlt: "Ko|Do Vault arkitektur — hybrid mellom ren klient-side og minimal server",
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
    v3_0Title: "v3.0 — Bankkort, Kredittkort & virtuelle kort",
    v3_0Body:
      "Egen kryptert funksjon for alle typer kort. Tilbud om Custom kamera-fangst — fotoet havner ALDRI i Camera Roll eller iCloud Photos.",
    v3_1Title: "v3.1 — 2FA TOTP integrert",
    v3_1Body:
      "Lev koder direkte i passord-oppføringen. Bytter telefon? Alt fungerer automatisk via den krypterte blob-en.",
    v4_0Title: "v4.0 — Sikker overlevering",
    v4_0Body:
      "Engangs-pakker (.kodoenc). Krypter dokumenter til én mottaker. Ingen Ko|Do-server involvert. Akkurat som PGP, men brukervennlig.",
    v4_5Title: "v4.5 — Dokument-laget",
    v4_5Body:
      "BYO Google Drive. Virtuell sikker disk for notater, PDF-er, Word-dokumenter. Mountes med master-passord, demonteres ved auto-lås.",

    // Waitlist
    waitlistEyebrow: "Bli den første som får vite",
    waitlistTitle: "Send meg én mail.",
    waitlistSub:
      "Jeg sender én mail når v3.0 er klar. Ingen nyhetsbrev. Ingen markedsføring. Du kan melde deg av når som helst.",
    waitlistEmailPlaceholder: "din@epost.no",
    waitlistButton: "Meld meg på",
    waitlistButtonLoading: "Sender...",
    waitlistSuccess: "Du er på lista. Sjekk innboksen.",
    waitlistError: "Noe gikk galt. Prøv igjen om litt.",
    waitlistInvalidEmail: "Ugyldig e-postadresse",
    waitlistAlready: "Du står allerede på lista. Takk!",
    waitlistConsent:
      "Ved å melde deg på godtar du at jeg kontakter deg om Ko|Do · Vault. Ingen tredjeparts-deling.",

    // Welcome email
    emailSubject: "Velkommen på Ko|Do · Vault-lista",
    emailGreeting: "Takk!",
    emailBody1:
      "Du er på lista. Jeg sier fra når v3.0 er klar — sannsynligvis i løpet av våren 2026.",
    emailBody2:
      "Ko|Do · Vault bygges fra grunnen av med ett prinsipp: 100% eller null. Lean Security · Not Security as a Service.",
    emailBody3:
      "Har du spørsmål? Bare svar på denne mailen — den går rett til meg.",
    emailSign: "Mvh,",
    emailSignName: "Michael Aagreen",
    emailSignTitle: "Ko|Do Consult",

    // Footer
    footerLine1: "Ko|Do · Vault",
    footerLine2: "By Ko|Do Consult · Michael Aagreen",
    footerLine3: "Bygget i Norge · Drevet av Upstash i EU",
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
    archImageAlt: "Ko|Do Vault architecture — hybrid between pure client-side and minimal server",
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
    v3_0Title: "v3.0 — Debit, Credit & virtual cards",
    v3_0Body:
      "Separate encrypted feature for all card types. Optional custom camera capture — your photo NEVER ends up in Camera Roll or iCloud Photos.",
    v3_1Title: "v3.1 — 2FA TOTP integrated",
    v3_1Body:
      "Live codes directly in the password entry. Switching phones? Everything works automatically via the encrypted blob.",
    v4_0Title: "v4.0 — Secure handoff",
    v4_0Body:
      "One-time packages (.kodoenc). Encrypt documents to a single recipient. No Ko|Do server involved. Just like PGP, but user-friendly.",
    v4_5Title: "v4.5 — Document layer",
    v4_5Body:
      "BYO Google Drive. Virtual secure disk for notes, PDFs, Word documents. Mounted with master password, dismounted on auto-lock.",

    waitlistEyebrow: "Be the first to know",
    waitlistTitle: "Send me an email.",
    waitlistSub:
      "I'll send one email when v3.0 ships. No newsletter. No marketing. You can unsubscribe anytime.",
    waitlistEmailPlaceholder: "you@email.com",
    waitlistButton: "Sign me up",
    waitlistButtonLoading: "Sending...",
    waitlistSuccess: "You're on the list. Check your inbox.",
    waitlistError: "Something went wrong. Try again shortly.",
    waitlistInvalidEmail: "Invalid email address",
    waitlistAlready: "You're already on the list. Thanks!",
    waitlistConsent:
      "By signing up you accept that I contact you about Ko|Do · Vault. No third-party sharing.",

    emailSubject: "Welcome to the Ko|Do · Vault list",
    emailGreeting: "Thank you!",
    emailBody1:
      "You're on the list. I'll let you know when v3.0 ships — likely during spring 2026.",
    emailBody2:
      "Ko|Do · Vault is built from the ground up on one principle: 100% or nothing. Lean Security · Not Security as a Service.",
    emailBody3:
      "Got questions? Just reply to this email — it goes straight to me.",
    emailSign: "Best,",
    emailSignName: "Michael Aagreen",
    emailSignTitle: "Ko|Do Consult",

    footerLine1: "Ko|Do · Vault",
    footerLine2: "By Ko|Do Consult · Michael Aagreen",
    footerLine3: "Built in Norway · Powered by Upstash in the EU",
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

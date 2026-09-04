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
    heroCta: "Kom i gang",
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
    roadmapEyebrow: "Bygget, versjon for versjon",
    roadmapTitle: "Det meste er alt i vaulten.",
    roadmapSub:
      "Passord, kort, ID-er og sikker overlevering er i vaulten i dag. Dokument-laget er det neste.",
    v3_0Title: "Bankkort og virtuelle kort",
    v3_0Body:
      "Egen kryptert arkitektur for alle typer betalingskort. Inkluderer en fullstendig isolert kamerafunksjon for skanning — bildet går rett i hvelvet, og berører aldri telefonens bildegalleri eller iCloud.",
    v3_1Title: "ID-er: pass og førerkort",
    v3_1Body:
      "Pass, førerkort, ID-kort og helse-/forsikringskort — strukturert og søkbart i vaulten. Fotografert med et isolert kamera som aldri rører telefonens bildegalleri.",
    v4_0Title: "Sikker overlevering",
    v4_0Body:
      "Engangspakker (.kodoenc). Krypter dokumenter for én spesifikk mottaker. Null server-involvering. Nøyaktig den samme sikkerheten som PGP, strippet for all friksjon.",
    v4_5Title: "Dokument-laget",
    v4_5Body:
      "Bring Your Own Storage (BYO). Google Drive, Dropbox eller en lokal USB. En virtuell, sikker disk for notater, PDF-er og dokumenter. Mountes med master-passordet, demonteres umiddelbart ved auto-lås.",

    // Kom i gang (plan-velger) — priser hentes dynamisk via /api/pricing
    pricingEyebrow: "Velg din plan",
    pricingTitle: "Kom i gang på ett minutt.",
    pricingSub:
      "Start gratis, ingen kortinfo. Oppgrader når du vil — eller la være. Du eier dataene uansett.",
    planTrialName: "Prøveperiode",
    planTrialPrice: "Gratis",
    trialForWord: "i",
    daysWord: "dager",
    planTrialDesc: "Test alt. Ingen kortinfo nødvendig.",
    planTrialB1: "Full vault-funksjonalitet",
    planTrialB2: "Ingen kortinfo nødvendig",
    planTrialCta: "Start prøveperioden",
    planMonthlyName: "Månedlig",
    perMonth: "/mnd",
    planMonthlyDesc: "Full tilgang. Si opp når som helst.",
    planMonthlyB1: "Alt i prøveperioden",
    planMonthlyB2: "Avbryt når som helst",
    planMonthlyCta: "Velg månedlig",
    planYearlyName: "Årlig",
    perYear: "/år",
    yearlyBadge: "Best verdi",
    planYearlyDesc: "Best verdi over tid.",
    yearlySaveSuffix: " % rimeligere enn månedlig",
    planYearlyB2: "Angrerett innen 14 dager",
    planYearlyCta: "Velg årlig",
    pricingB2bLine: "Bedrift med flere ansatte?",
    pricingB2bCta: "Ta kontakt →",

    // Produktbilder (Showcase)
    showcaseEyebrow: "Slik ser det ut",
    showcaseTitle: "Ikke en beskrivelse. Produktet.",
    showcaseSub:
      "Vaulten kjører i nettleseren — på maskinen, på mobilen, på en lånt telefon i utlandet. Ingenting å installere.",
    shotPending: "Skjermbilde kommer",
    shotLockAlt: "Ko | Do Vault låseskjerm i nettleseren, med Touch ID og master-passord",
    shotLockCaption:
      "Slik møter den deg: låst, i nettleseren. Touch ID eller master-passord — og en ærlig beskjed om at vaulten ikke kan gjenopprettes.",
    shotDashAlt: "Oversikt over passord gruppert i kategorier",
    shotDashCaption:
      "Passord, kort og ID-er gruppert og søkbare. Dekryptert lokalt, kun mens vaulten er åpen.",
    shotMasterAlt: "Opprett master-passord — advarsel om at data ikke kan gjenopprettes",
    shotMasterCaption:
      "Ved oppsett: ingen «glemt passord». Du bekrefter selv at dataene er tapt hvis master-passordet mistes.",
    shotLabAlt: "Passord Lab med estimert brute-force-tid",
    shotLabCaption:
      "Passord Lab: test styrke og generer norske passfraser. Alt skjer i nettleseren — ingenting sendes til server.",
    shotBackupAlt: "Backup og eksport — kryptert backup, CSV-eksport og permanent sletting",
    shotBackupCaption:
      "Ta med deg alt når du vil: kryptert backup eller Bitwarden-kompatibel CSV. Og du kan slette alt permanent.",

    // FAQ
    faqEyebrow: "Spørsmål og svar",
    faqTitle: "Det du lurer på.",
    faqQ1: "Hva skjer hvis jeg glemmer master-passordet?",
    faqA1:
      "Da er dataene borte. For alltid. Ingen reset, ingen bakdør — det er hele poenget. Kun du har tilgang til dine data gjennom ditt MasterPassord.",
    faqQ2: "Kan dere se dataene mine?",
    faqA2:
      "Nei. Alle data håndteres og krypteres i nettleseren din. Når data forlater din nettleser er de kryptert.",
    faqQ3: "Hvor lagres dataene?",
    faqA3:
      "I EU (Frankfurt + Stockholm). Schrems II-kompatibelt, bygget i Norge.",
    faqQ4: "Hva skjer hvis Ko | Do legges ned?",
    faqA4:
      "Du eksporterer alt. Filformatet er dokumentert og kan dekrypteres uten oss vha annen teknisk bistand.",
    faqQ5: "Må jeg installere noe?",
    faqA5:
      "Nei. Kjører 100 % i nettleseren — Chrome, Safari, Firefox, Brave. Touch/Face ID der det støttes. Det betyr har du tilgang til en nettleser så har du tilgang til dine data, uavhengig av hvor du er i verden.",

    // Waitlist
    waitlistEyebrow: "Følg med",
    waitlistTitle: "Send meg én mail.",
    waitlistSub:
      "Legg igjen e-posten, så holder jeg deg oppdatert på nytt fra vaulten. Ingen nyhetsbrev. Ingen markedsføring. Ingen oppfølging.",
    waitlistOneLiner: "Ikke klar ennå? Legg igjen e-posten, så sier jeg fra om nytt.",
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
      "Takk for interessen. Jeg holder deg oppdatert på nytt fra Ko | Do · Vault.",
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
    footerStatus: "Live",

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
    heroCta: "Get started",
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

    roadmapEyebrow: "Built, version by version",
    roadmapTitle: "Most of it is already in the vault.",
    roadmapSub:
      "Passwords, cards, IDs and secure handoff are in the vault today. The document layer is next.",
    v3_0Title: "Debit and virtual cards",
    v3_0Body:
      "Dedicated encrypted architecture for all types of payment cards. Includes a fully isolated camera function for scanning — the image goes straight to the vault, never touching the phone's photo gallery or iCloud.",
    v3_1Title: "IDs: passport and driver's license",
    v3_1Body:
      "Passport, driver's license, ID card and health/insurance cards — structured and searchable in the vault. Captured with an isolated camera that never touches your phone's photo gallery.",
    v4_0Title: "Secure handoff",
    v4_0Body:
      "One-time packages (.kodoenc). Encrypt documents for one specific recipient. Zero server involvement. The exact same security as PGP, stripped of all friction.",
    v4_5Title: "Document layer",
    v4_5Body:
      "Bring Your Own Storage (BYO). Google Drive, Dropbox, or a local USB. A virtual, secure disk for notes, PDFs and documents. Mounted with the master password, dismounted instantly on auto-lock.",

    // Get started (plan selector) — prices fetched dynamically via /api/pricing
    pricingEyebrow: "Choose your plan",
    pricingTitle: "Get started in a minute.",
    pricingSub:
      "Start free, no card required. Upgrade whenever — or don't. You own your data either way.",
    planTrialName: "Free trial",
    planTrialPrice: "Free",
    trialForWord: "for",
    daysWord: "days",
    planTrialDesc: "Test everything. No card required.",
    planTrialB1: "Full vault functionality",
    planTrialB2: "No card required",
    planTrialCta: "Start free trial",
    planMonthlyName: "Monthly",
    perMonth: "/mo",
    planMonthlyDesc: "Full access. Cancel anytime.",
    planMonthlyB1: "Everything in the trial",
    planMonthlyB2: "Cancel anytime",
    planMonthlyCta: "Choose monthly",
    planYearlyName: "Yearly",
    perYear: "/yr",
    yearlyBadge: "Best value",
    planYearlyDesc: "Best value over time.",
    yearlySaveSuffix: " % cheaper than monthly",
    planYearlyB2: "14-day refund window",
    planYearlyCta: "Choose yearly",
    pricingB2bLine: "A team with several employees?",
    pricingB2bCta: "Get in touch →",

    // Showcase
    showcaseEyebrow: "What it looks like",
    showcaseTitle: "Not a description. The product.",
    showcaseSub:
      "The vault runs in your browser — on your computer, your phone, or a borrowed phone abroad. Nothing to install.",
    shotPending: "Screenshot coming",
    shotLockAlt: "Ko | Do Vault lock screen in the browser, with Touch ID and master password",
    shotLockCaption:
      "How it meets you: locked, in the browser. Touch ID or master password — and an honest note that the vault cannot be recovered.",
    shotDashAlt: "Overview of passwords grouped by category",
    shotDashCaption:
      "Passwords, cards and IDs grouped and searchable. Decrypted locally, only while the vault is open.",
    shotMasterAlt: "Create master password — warning that data cannot be recovered",
    shotMasterCaption:
      "At setup: no \u00abforgot password\u00bb. You confirm yourself that the data is lost if the master password is.",
    shotLabAlt: "Password Lab showing estimated brute-force time",
    shotLabCaption:
      "Password Lab: test strength and generate Norwegian passphrases. Everything happens in your browser.",
    shotBackupAlt: "Backup and export — encrypted backup, CSV export and permanent deletion",
    shotBackupCaption:
      "Take everything with you whenever: encrypted backup or Bitwarden-compatible CSV. And you can delete it all permanently.",

    // FAQ
    faqEyebrow: "Questions and answers",
    faqTitle: "What you’re wondering.",
    faqQ1: "What happens if I forget my master password?",
    faqA1:
      "Then your data is gone. Forever. No reset, no backdoor — that is the whole point. Only you have access to your data, through your master password.",
    faqQ2: "Can you see my data?",
    faqA2:
      "No. All data is handled and encrypted in your browser. When data leaves your browser, it is encrypted.",
    faqQ3: "Where is the data stored?",
    faqA3:
      "In the EU (Frankfurt + Stockholm). Schrems II-compliant, built in Norway.",
    faqQ4: "What happens if Ko | Do shuts down?",
    faqA4:
      "You export everything. The file format is documented and can be decrypted without us, with other technical assistance.",
    faqQ5: "Do I need to install anything?",
    faqA5:
      "No. Runs 100 % in the browser — Chrome, Safari, Firefox, Brave. Touch/Face ID where supported. That means if you have access to a browser, you have access to your data, wherever you are in the world.",

    waitlistEyebrow: "Stay in the loop",
    waitlistTitle: "Send me an email.",
    waitlistSub:
      "Leave your email and I'll keep you posted on what's new in the vault. No newsletter. No marketing. No follow-ups.",
    waitlistOneLiner: "Not ready yet? Leave your email and I'll let you know what’s new.",
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
      "Thanks for your interest. I'll keep you posted on what's new from Ko | Do · Vault.",
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
    footerStatus: "Live",

    skipToContent: "Skip to content",
    languageNorwegian: "Norwegian",
    languageEnglish: "English",
  },
} as const;

export type StringKey = keyof typeof STRINGS.nb;

export function t(locale: Locale, key: StringKey): string {
  return STRINGS[locale][key] ?? STRINGS.nb[key] ?? key;
}

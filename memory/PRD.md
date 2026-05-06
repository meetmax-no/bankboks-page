# PRD — Ko | Do · Vault Landing Page (bankboks-page)

## Prosjekt
- **Repo**: `meetmax-no/bankboks-page` (🔒 **privat** fra 6. mai 2026)
- **Produksjon**: https://www.kodovault.no (peker til Vercel)
- **Vercel-prosjekt**: `kodo-vault-web` (team: meetmax-no's projects, Pro-plan)
- **Stack**: Next.js 15.2.6 · React 19 · TypeScript · Tailwind 3.4 · Resend (waitlist)
- **Relatert**: `meetmax-no/bankboks` — selve vault-appen (ikke del av dette repoet)

## Formål
One-pager landingside som samler waitlist-emails via Resend. Helt isolert fra vault-koden (zero-knowledge-prinsipp) — ingen krypto, ingen vault-tilstand. Kun marketing-copy og skjema.

## Arkitektur
```
/app/frontend/                    # Next.js App Router
├── app/
│   ├── api/waitlist/route.ts    # POST: Resend Audience + velkomstmail
│   ├── layout.tsx               # Meta, fonts (Inter + Caveat), manifest
│   ├── page.tsx                 # One-pager composition + top-bar
│   ├── globals.css              # CSS custom props (--accent #facc15, etc.)
│   ├── favicon.ico / icon.png / apple-icon.png
├── components/
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── ArchitectureSection.tsx
│   ├── NorthStarSection.tsx
│   ├── RoadmapSection.tsx
│   ├── WaitlistForm.tsx
│   ├── Footer.tsx
│   └── LanguageToggle.tsx       # NO/EN toggle
├── lib/
│   ├── i18n.ts                  # ALLE tekststrenger (NO + EN speilede)
│   └── resend.ts                # Server-only Resend SDK init + HTML mail builder
└── public/                      # manifest, android-chrome PNG-er, arkitektur-bilder
```

## Brand-regler
- **Skrivemåte**: Alltid `Ko | Do · Vault` (mellomrom rundt pipe). Alltid `Ko | Do Consult` (ikke `Ko|Do`).
- **Accent-farge**: `#facc15` (Tailwind yellow-400) — brukt på «100 %», border-l på sitat, knapper, favicon-bg.
- **Bakgrunn**: `#0a0e1a` (mørk navy, brukt som `--bg` og `theme_color` i manifest).
- **Font**: Inter (både tekst og display) + Caveat (hvis dekorativ håndskrift trengs).

## Env-vars (Vercel — Production)

> **Faktiske verdier ligger kun i Vercel** (Settings → Environment Variables). De skal aldri commits til repoet. Hvis du trenger dem: kopier fra Vercel-dashboardet.

| Variabel | Beskrivelse |
|---|---|
| `RESEND_API_KEY` | Resend dashboard → API Keys |
| `RESEND_AUDIENCE_ID` | Resend dashboard → Audiences (UUID) |
| `RESEND_FROM_EMAIL` | `noreply@kodovault.no` (domene verifisert i Resend) |
| `RESEND_FROM_NAME` | `Ko \| Do · Vault` (mellomrom rundt pipe) |
| `RESEND_BCC_EMAIL` | `firma@meetmax.no` |
| `NEXT_PUBLIC_APP_URL` | `https://app.kodovault.no` |

**Sikkerhetsregel**: Behandle `RESEND_API_KEY` som passord. Eksponert tidligere i offentlig repo (5. mai 2026) → rotert. Ikke lim inn i markdown-filer eller chatter igjen.

## Deploy-flyt
1. Kode endres i `/app/frontend/` (Emergent workspace)
2. «Save to Github» → pusher til `meetmax-no/bankboks-page` `main` som `emergent-agent-e1`
3. ⚠️ **Vercel blokkerer deploy** fordi `emergent-agent-e1` (bot) ikke har Vercel-konto koblet — sikkerhets-feature på private Pro-repos
4. ⚠️ **Manuell «Redeploy» i Vercel virker IKKE heller** — blokkeringen er knyttet til commiten, ikke handlingen
5. ✅ **Den fungerende workarounden**: rediger en hvilken som helst fil i GitHub web-UI (f.eks. en bokstav i `README.md`/`LesMeg.md`) → commit-author blir deg (trusted Vercel-konto) → Vercel deployer **hele `main`-tilstanden** inkludert alle bot-commits siden forrige deploy
6. Alternativ: sett opp Deploy Hook + GitHub Actions for full automasjon (se backlog)

## Status — v1.0 ferdig
- ✅ **LIVE** på https://www.kodovault.no (5. mai 2026)
- ✅ Custom domain `kodovault.no` + `www.kodovault.no` med auto-SSL
- ✅ Resend-domene `kodovault.no` verifisert, sender fra `noreply@kodovault.no`
- ✅ Waitlist end-to-end testet: form → Resend Audience + velkomstmail levert på sekunder
- ✅ Mail-klient `noreply@kodovault.no` (30 kr/mnd full IMAP) — kan svare på replies i Ko | Do-brand
- ✅ Favicon (gul KV-sirkel), NO/EN tekst-paritet, brand `Ko | Do · Vault` konsistent overalt
- ✅ Mobile padding-bug fikset (`h-13` → `h-14`, form `px-8` på mobil)
- ✅ Vercel Analytics aktiv (Speed Insights bevisst skippet — $10/mnd ikke verdt det for landing)
- ✅ Repo gjort privat, Resend API-nøkkel rotert etter tidligere eksponering i public commit
- ✅ PRD-en renset for hemmeligheter (alle env-verdier kun i Vercel)

## Backlog / fremtidige iterasjoner
- Sett opp **GitHub Actions + Vercel Deploy Hook** hvis manuell redeploy blir irriterende ved hyppige endringer
- Blog/docs-side under samme domene når produkt nærmer seg release
- Utvide landing med «v3.0 er klar»-CTA når vault er produksjonsklar (bytte fra «Send meg én mail» til «Last ned» / «Logg inn på app.kodovault.no»)
- A/B-teste hero-copy basert på Analytics-data (conversion-rate per trafikk-kilde)
- Vurdere å gjøre repoet public igjen hvis manuell redeploy-friksjon overstiger sikkerhets-gevinsten (alle secrets ligger nå i Vercel uansett)

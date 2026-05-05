# PRD — Ko | Do · Vault Landing Page (bankboks-page)

## Prosjekt
- **Repo**: [`meetmax-no/bankboks-page`](https://github.com/meetmax-no/bankboks-page)
- **Produksjon**: https://www.kodovault.no (peker til Vercel)
- **Vercel-prosjekt**: `kodo-vault-web` (team: meetmax-no's projects)
- **Stack**: Next.js 15.2.6 · React 19 · TypeScript · Tailwind 3.4 · Resend (waitlist)
- **Relatert**: [`meetmax-no/bankboks`](https://github.com/meetmax-no/bankboks) — selve vault-appen (ikke del av dette repoet)

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

| Variabel | Verdi |
|---|---|
| `RESEND_API_KEY` | `re_3jNZ3E8g_8pQsyBMKQc9k59AqL48Atg6a` |
| `RESEND_AUDIENCE_ID` | `661b2d14-9a5a-478d-9691-9c53a5d9789e` |
| `RESEND_FROM_EMAIL` | `onboarding@resend.dev` *(start — bytt til `noreply@kodovault.no` når domenet er verifisert i Resend)* |
| `RESEND_FROM_NAME` | `Ko \| Do · Vault` *(NB: pipe må escapes `\|` i Vercel-UI-ets tabellvisning, men verdien skal være `Ko | Do · Vault` med mellomrom rundt pipe)* |
| `RESEND_BCC_EMAIL` | `firma@meetmax.no` |
| `NEXT_PUBLIC_APP_URL` | `https://app.kodovault.no` |

**Sikkerhet**: `RESEND_API_KEY` over er ekte live-nøkkel. Rotér via Resend dashboard → API Keys hvis den noen gang lekker utenfor Vercel.

## Deploy-flyt
1. Kode endres i `/app/frontend/` (Emergent workspace)
2. «Save to Github» → pusher til `meetmax-no/bankboks-page` `main`
3. Vercel auto-deployer fra `main` (2–3 min: yarn install + next build)
4. Ved env-var-endring: redeploy triggers manuelt (Vercel → Deployments → Redeploy)

## Domene-oppsett (pending)
- [ ] Registrere `kodovault.no`
- [ ] Vercel → Settings → Domains → add `kodovault.no` + `www.kodovault.no`
- [ ] DNS hos registrar: A/CNAME som Vercel angir
- [ ] Resend → Domains → verify `kodovault.no` (4 DNS-records: SPF, DKIM, MX return-path, DMARC)
- [ ] Når Resend-verifisering er grønn: oppdater `RESEND_FROM_EMAIL` → `noreply@kodovault.no` + redeploy
- [ ] Mail-boks `noreply@kodovault.no` (30 kr/mnd via registrar) for å kunne svare på evt. replies i Ko | Do-brand

## Status
- ✅ v1.0 landingsside deployet til Vercel (initial deploy 5. mai 2026)
- ✅ Favicon på plass (gul KV-sirkel, favicon.io-eksport)
- ✅ NO + EN tekstene synkronisert, brand-konsistens «Ko | Do · Vault» overalt
- ⏳ Env-vars må settes i Vercel før waitlist fungerer på ordentlig
- ⏳ Domene-kjøp + DNS-oppsett
- ⏳ Resend-domene-verifisering

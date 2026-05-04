# Ko|Do · Vault — Landing Page

One-pager for **www.kodovault.no**. Samler waitlist-emails via **Resend**.

## Stack
- Next.js 15.2.6 + React 19 + TypeScript
- Tailwind CSS 3.4
- Resend (Audience + transactional welcome mail)
- Lucide-react icons + Sonner toasts

## Prosjekt-struktur

```
/app/landing
├── app/
│   ├── api/waitlist/route.ts     # POST: legg til i Audience + send velkomst
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Hele One-pageren (klient-komponent)
├── components/
│   ├── LanguageToggle.tsx        # 🇳🇴 / 🇬🇧
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── ArchitectureSection.tsx
│   ├── NorthStarSection.tsx
│   ├── RoadmapSection.tsx
│   ├── WaitlistForm.tsx
│   └── Footer.tsx
├── lib/
│   ├── i18n.ts                   # Norsk + engelsk strenger
│   └── resend.ts                 # Klient-init av Resend SDK
└── public/
    ├── architecture.png
    └── zero-knowledge.png
```

## Lokal utvikling

```bash
cd /app/landing
yarn install
cp .env.example .env.local        # fyll inn RESEND_*
yarn dev                          # http://localhost:3100
```

## Env-vars (Vercel)

| Navn | Beskrivelse |
|------|-------------|
| `RESEND_API_KEY` | Fra Resend dashboard → API Keys |
| `RESEND_AUDIENCE_ID` | Fra Resend dashboard → Audiences (UUID) |
| `RESEND_FROM_EMAIL` | `onboarding@resend.dev` til å starte, senere `noreply@kodovault.no` |
| `RESEND_FROM_NAME` | `Ko\|Do · Vault` |
| `RESEND_BCC_EMAIL` | Mike sin innboks (BCC på alle velkomst-mail) |
| `NEXT_PUBLIC_APP_URL` | `https://app.kodovault.no` (lenke fra landingside til vault) |

## Deploy (Vercel)

1. Opprett nytt GitHub-repo: `meetmax-no/kodovault-landing`
2. Push denne mappa dit som rotnivå
3. Vercel → Import Project → velg repoet
4. Sett env-vars (over)
5. Custom domains: `kodovault.no` + `www.kodovault.no`

## Arkitektur-prinsipp

Helt isolert fra vault-koden (D-001 North Star). Ingen krypto, ingen vault-tilstand. Kun marketing-copy og waitlist-skjema.

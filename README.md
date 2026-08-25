# Cherokee Home Pros

Local home-services directory for Canton, Woodstock, Holly Springs, Ball Ground and nearby North Atlanta cities.

Focus: septic, pool, roofing, HVAC, plumbing, electrical / EV charger, Tesla body.

Live: [cherokee-home-pros.pages.dev](https://cherokee-home-pros.pages.dev/)

## Quick start

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321/`.

## Content model

Each pro is a Markdown file in `src/content/pros/`.

| Field | Type | Notes |
|-------|------|-------|
| name | string | |
| url | url (optional) | |
| phone | string | |
| city | string | Primary city |
| cities | string[] | Service area |
| categories | enum[] | septic, plumbing, pool, roofing, hvac, electrical, ev-charger, tesla-body |
| emergency | boolean | default false |
| licensed | boolean | default true |
| notes | string | One-sentence why they are listed |
| featured | boolean | default false |

## Pages

- `/` — Home with service chips, city chips, short list of featured pros
- `/pros` — All contractors
- `/pros/[slug]` — Individual pro page
- `/services/[slug]` — Service landing (septic, pool, etc.)
- `/cities/[slug]` — City landing (canton, woodstock, …)
- `/get-quote` — Quote request form (Formspark → nigelcox98@gmail.com)
- `/thanks` — Post-submit confirmation
- `/about`

## Monetization

The product is the quote form, not ads.

1. Homeowner submits service + city + phone
2. You forward to 2–3 matching pros
3. Charge $25–75 per valid lead or $99–199/mo featured listing once volume exists

## Deploy

Cloudflare Pages project `cherokee-home-pros`.

```bash
npm run deploy
```

Dashboard / Git settings if you connect this repo:

- Build command: `npm run build`
- Output: `dist`
- Framework: Astro

## Next after first deploy

1. Verify every phone and URL against the company website
2. Write the 8 high-intent pages listed in the plan (septic pumping Canton, etc.)
3. Post in local Facebook groups (Bridgemill, Towne Lake, Canton neighbors)
4. Add remaining listings from the v1 markdown

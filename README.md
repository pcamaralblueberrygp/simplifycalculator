# SimplifyCalculator — programmatic financial calculators

> **Domain:** simplifycalculator.com  
> **GitHub repo:** https://github.com/pcamaralblueberrygp/simplifycalculator  
> **Hosting:** Cloudflare Pages (free tier)

A starter kit for an AdSense site built around free financial calculators
(loans, mortgages, savings, investing, debt payoff, retirement). Ships with
10 working calculators and a structure designed so adding the 11th, 50th, or
200th page is mostly editing one data file.

## Stack

- **Astro** — static site generator, zero JS shipped except each
  calculator's own small script.
- **TypeScript** data file as the "database" of pages (`src/data/calculators.ts`).
- **GitHub** for version control.
- **Cloudflare Pages** for hosting/deploy.

## Project structure

```
src/
  data/calculators.ts          <- one entry per page (title, copy, calcType)
  components/calculators/      <- one component per TYPE of math (loan, roi, ...)
  pages/calculators/[slug].astro  <- renders any calculator from the data file
  pages/index.astro            <- homepage, auto-lists every calculator
  layouts/BaseLayout.astro     <- shared head/nav/footer/SEO tags
public/
  llms.txt                     <- AI/LLM crawler guidance (llmstxt.org format)
  robots.txt
scripts/new-calculator.mjs     <- interactive CLI to add a new page
.github/workflows/deploy.yml   <- optional GitHub Actions deploy path
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the production build locally
```

## How to add new pages (the recurring part)

**Reusing existing math** (e.g. another loan-payment variant, another ROI
scenario): run `npm run new:calculator` and answer the prompts. It appends a
new entry to `src/data/calculators.ts` and the page is live at
`/calculators/<slug>` on the next build — no new files needed.

**Brand-new math** (a calculator type that doesn't exist yet, e.g. a "rent
vs. buy" or "tax bracket" calculator):

1. Add the type name to the `CalcType` union in `src/data/calculators.ts`.
2. Create `src/components/calculators/YourCalculator.astro` (copy an existing
   one as a starting point — form + result box + a `<script>` with the math).
3. Register it in the `componentMap` inside `src/pages/calculators/[slug].astro`.
4. Add a data entry for it (or use the `new:calculator` script and pick the
   new type when prompted).

Each page also auto-generates FAQ schema (JSON-LD) from the `faqs` array in
the data file, which is worth filling in with real, specific Q&As — that's
also what keeps each page distinct enough to avoid Google's "scaled content
abuse" policy, which targets templated pages with no real differentiation.

## Deploying

### First-time setup

1. Push this repo to `https://github.com/pcamaralblueberrygp/simplifycalculator`.
2. Register `simplifycalculator.com` on Cloudflare Registrar (already done — ~$10.46/yr).

**Option A — Cloudflare Pages dashboard (recommended, no GitHub Actions needed):**

1. In the Cloudflare dashboard: Workers & Pages → Create → Pages → Connect to
   Git → select the `simplifycalculator` repo.
2. Build command: `npm run build`. Build output directory: `dist`.
3. Every push to `main` rebuilds and redeploys automatically.
4. After first deploy, add `simplifycalculator.com` as a custom domain in the
   Pages dashboard → Custom domains.

**Option B — GitHub Actions (`.github/workflows/deploy.yml`):**

Use this if you want the build to run in GitHub Actions instead. Requires
two repo secrets: `CLOUDFLARE_API_TOKEN` (Pages:Edit permission) and
`CLOUDFLARE_ACCOUNT_ID`. If you go with Option A, delete this workflow file.

The Cloudflare Pages project name in `deploy.yml` is already set to `simplifycalculator`.

## AdSense checklist

Apply only once the basics are in place, since thin/incomplete sites get
rejected or risk later policy action:

- At least 15–20 calculator pages live, each with real working logic, the
  explanation/example/FAQ sections filled in (not left as placeholders).
- About page and Privacy Policy page present (both are included — update the
  contact email in each before going live).
- Site indexed in Google Search Console with no major crawl errors.
- Real traffic, even modest, ideally from organic search rather than only
  direct visits.
- Custom domain connected (simplifycalculator.com, not the `.pages.dev` subdomain).

## Content/SEO risk notes

Google's spam policies explicitly target "scaled content abuse" — large
numbers of pages generated from a template with little real differentiation.
This kit stays on the safe side because every page runs a genuinely distinct,
working calculation rather than just swapping a variable into reworded text.
Keep it that way as you add pages: don't ship a new page unless it does
something the existing pages don't.

Each calculator page also links to its formula source (CFPB or Investopedia)
for transparency and E-E-A-T signals.

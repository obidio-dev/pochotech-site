# pocho.tech

Static marketing site for pocho.tech — the AI automation studio of Erick Bonilla.

Built with [Astro 5](https://astro.build): every page ships as fully static HTML so search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot — none of which execute JavaScript) can read 100% of the content.

## Stack

- Astro 5, zero client-side framework (one tiny inline script for the mobile menu)
- Self-hosted fonts (Inter Variable, JetBrains Mono Variable)
- JSON-LD entity graph on every page (Organization, Person, Service, Product, Review, FAQPage, BreadcrumbList)
- `llms.txt` per [llmstxt.org](https://llmstxt.org), sitemap via `@astrojs/sitemap`, IndexNow ping on deploy
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # serve the build locally
```

On this Windows machine, npm needs the system CA store: `$env:NODE_OPTIONS="--use-system-ca"`.

## Where things live

| What | Where |
|---|---|
| Page copy (source markdown from the copy workflow) | `copy/` |
| Pages | `src/pages/` |
| Prices, checkout links, Calendly, email | `src/data/site.ts`, `src/data/templates.ts` |
| JSON-LD helpers | `src/lib/schema.ts` |
| Brand tokens (colors, type) | `src/styles/global.css` |
| robots.txt, llms.txt, favicon, OG image | `public/` |

## Editing prices or links

Template prices and Lemon Squeezy checkout URLs live in `src/data/templates.ts` (and appear in page copy under `src/pages/templates/`). The Calendly URL and contact email live in `src/data/site.ts`. Change, commit, push — the deploy workflow rebuilds and republishes.

## Custom domain

`pocho.tech` via GitHub Pages custom domain + Namecheap DNS (A records to GitHub Pages IPs for the apex, `www` CNAME to the Pages hostname).

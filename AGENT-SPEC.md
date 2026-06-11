# pochotech-site — Page Assembly Spec (for build agents)

You are assembling pages for a static Astro 5 site at `C:\Users\USUARIO\pochotech-site`. Final copy for every page lives in `copy\*.md` (each file starts with `PATH:`, `META TITLE:`, `META DESC:` lines, then the page body in markdown). **Use the copy VERBATIM** — you are converting markdown copy into Astro components, not rewriting it. Never invent or alter wording, prices, metrics, or quotes. No emoji anywhere. No exclamation marks.

## Project pieces you MUST use (read each before writing pages)

- `src/layouts/Base.astro` — wrap every page. Props: `title` (meta title), `description`, `path` (e.g. `/services/custom-automation`), optional `ogType`, `jsonLd` (array — pass `graph(...)` output).
- `src/lib/schema.ts` — JSON-LD helpers: `graph(...pageSchemas)` (always wrap page schemas with this; it injects Organization/Person/WebSite), `breadcrumbs([{name, path}])`, `serviceSchema({name, description, path, price?})`, `productSchema({name, description, path, price, image?})`, `faqSchema([{q, a}])`, `reviewSchema({body, authorName, authorTitle})`.
- `src/components/Faq.astro` — props `faqs: {q, a}[]`, optional `heading`. Renders visible FAQ. When you use it, ALSO pass `faqSchema(faqs)` into the page's `graph(...)` with the SAME text.
- `src/components/CtaSection.astro` — props `heading`, `body?`, `secondaryLabel?`, `secondaryHref?`. Renders the final CTA with the primary Calendly button built in.
- `src/components/TemplateCard.astro` — props `template` (from `src/data/templates.ts`), `eager?`.
- `src/data/site.ts` — `SITE_URL, CALENDLY, EMAIL, BOILERPLATE, CTA_PRIMARY`.
- `src/data/templates.ts` — the 7 templates (slug, name, price, checkout, integrations, image, mechanism, provenance, featured).
- `src/data/case-studies.ts` — case study facts.
- `src/styles/global.css` — utility classes: `.wrap` (max-width container), `.section` (vertical padding), `.section-alt` (darker bg), `.eyebrow` (mono small-caps label), `.card`, `.grid-2`, `.grid-3`, `.btn .btn-primary`, `.btn .btn-secondary`, `.price` (red mono). Dark theme is global; do not add light backgrounds.

## Hard rules

1. **One `<h1>` per page** — the copy's first `#` heading. Subsequent `##` → `<h2>`, etc. Strip any "— pocho.tech" suffix from H1s (it belongs in meta title only).
2. Some copy files use scaffold markers like `## 1. Hero`, `**Headline:**`, `**Primary CTA:**` — these are structural directions, NOT visible text. Render the indicated structure; never output the marker labels themselves.
3. **Link normalization** — the copy contains a few wrong paths. Fix every occurrence:
   - `/n8n-consulting` → `/services/n8n-consulting`
   - `/industries/agencies` → `/industries/marketing-agencies`
   - `/industries/accounting` → `/industries/accounting-firms`
   - `/industries/dmos-tourism` → `/industries/destination-marketing`
4. Booking CTAs link to `CALENDLY` (import it; never hardcode). Lemon Squeezy checkout URLs stay exactly as written in copy. External links get `rel="noopener"`.
5. FAQ sections: visible text via `Faq.astro` AND matching `faqSchema` in `graph(...)`. FAQ answers in schema = plain text, no markdown.
6. Breadcrumbs JSON-LD on every page below the top level (e.g. Services → Custom Automation Build). No visible breadcrumb UI needed.
7. Blockquotes (testimonials) → `<blockquote>` with `<cite>` for attribution. Keep quote text verbatim.
8. Meta `title`/`description` come from the copy file's `META TITLE:`/`META DESC:` lines.
9. Pages must be fully static — no client-side JS beyond what Base.astro already has.
10. Write scoped `<style>` blocks per page for layout the utility classes don't cover. Match the existing aesthetic: black backgrounds, `#1a1a1a` cards, red `#ef3f28` ONLY for CTAs/prices/metrics, generous spacing (`var(--space-section)`), mono font (`var(--font-mono)`) for labels/prices/metrics.
11. Metrics displays (e.g. "1.5–2 hrs → 15 min") render large in red mono — class suggestion: a `.metric` style with `font-family: var(--font-mono); color: var(--c-red); font-size: clamp(1.6rem, 4vw, 2.6rem); font-weight: 700;`.
12. After writing your pages, verify imports resolve (paths relative to the page's directory: e.g. from `src/pages/services/x.astro` → `../../layouts/Base.astro`).

## Per-page JSON-LD expectations

- Service pages: `graph(serviceSchema({...}), breadcrumbs([...]), faqSchema([...]))`.
- Template pages: `graph(productSchema({name, description: mechanism, path, price}), breadcrumbs, faqSchema)`.
- Case studies: `graph(breadcrumbs, reviewSchema(...))` where the page has a testimonial (Dahlia+ has NONE — no reviewSchema there).
- Industry pages: `graph(serviceSchema({name: 'AI Automation for <industry>', ...}), breadcrumbs, faqSchema)`.
- about: `graph(breadcrumbs)` (Person/Org already in graph); contact: `graph(breadcrumbs)`.

# Akshara Saini — Portfolio

Portfolio site for a creative and brand strategist. Multi-disciplinary: brand
strategy, graphic design, art direction, copywriting, video editing, campaign
concepting and pitch decks.

Built with Vite + React, rendered to static HTML for every route, and
deployed to GitHub Pages and Vercel.

---

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # static build into dist/ (42 pages)
npm run preview    # preview the built output
```

---

## Project structure

```
src/
├── components/      Reusable UI (Header, Footer, Reveal, ProjectCard, forms)
├── data/            All content lives here — edit these, not the components
│   ├── site.js        Contact details, navigation, discipline list
│   ├── content.js     Services, process phases, differentiators
│   ├── projects.js    Every case study, process breakdown and visual collection
│   ├── routes.js      Per-page titles and descriptions (SEO)
│   └── config.js      Site URL and meta defaults
├── hooks/           Scroll, parallax, reveal and route effects
├── pages/           One file per route
└── styles/          CSS, split by concern (tokens → base → layout → …)

scripts/
├── prerender.mjs       Builds and renders every route to static HTML
├── generate-assets.mjs Generates favicon, touch icon and OG image
└── generate-pdf.mjs   Builds the downloadable portfolio PDF
```

---

## Deployment

### GitHub Pages

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. Push the repo to GitHub.
2. **Settings → Pages → Source: GitHub Actions**.
3. The workflow auto-detects whether this is a user site
   (`username.github.io` → base `/`) or a project site
   (`username.github.io/repo` → base `/repo/`) and sets `BASE_PATH` accordingly.

### Vercel

`vercel.json` sets the build command and output directory. Connect the repo in
the Vercel dashboard, or deploy from the CLI:

```bash
npx vercel --prod
```

Set the environment variable `VITE_SITE_URL` on **both** hosts so the canonical
URL, Open Graph tags and sitemap point at the right domain:

```
VITE_SITE_URL=https://your-domain.com
```

Without it, the site falls back to `https://aksharasaini.com`.

---

## Editing content

Everything a visitor reads lives in `src/data/`.

| What | Where |
| --- | --- |
| Email, phone, social links, portfolio PDF link | `src/data/site.js` |
| Services, process phases, differentiators | `src/data/content.js` |
| Case studies, process breakdowns, visual work | `src/data/projects.js` |
| Page titles and meta descriptions | `src/data/routes.js` |

### Placeholders

Project entries and image slots marked `placeholder: true` are stand-ins
written to demonstrate the layout. They are visibly labelled in the interface
with a **Placeholder** badge and a "replace with your real artwork" caption.

Replace them with real work:

- **Text** — edit the entry in `src/data/projects.js`.
- **Images** — drop a file into `public/media/` and set `cover` on the project
  entry. Gallery slots pick up a `src` on the `Figure` component in
  `src/components/Media.jsx`.
- **Metrics** — update the `metrics` array. Anything invented must be replaced
  or removed; do not publish unverified numbers.

---

## Form

The contact form works with no backend: it opens a pre-filled draft in the
visitor's mail client, so a message can never be lost.

To post to a real endpoint instead, set:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
```

The form then POSTs JSON and reports the server response, falling back to the
mail client if the endpoint fails.

---

## Assets

```bash
npm run assets   # regenerates favicon.ico, apple-touch-icon.png, og-image.jpg
npm run pdf      # regenerates public/portfolio/akshara-saini-portfolio.pdf
```

The PDF is built from the live pages, so it stays in sync with the site. Run
`npm run build` first.

---

## Accessibility and performance

- Semantic landmarks, a skip link, labelled form fields with inline errors.
- Visible focus rings, `aria-current` on the active nav item.
- All motion respects `prefers-reduced-motion`; decorative animation is
  dropped rather than merely shortened.
- Fonts are self-hosted (Fontsource) — no third-party requests.
- Images are lazy-loaded with explicit dimensions, so nothing shifts.
- The grain and halftone textures are inline SVG and CSS — no image payload.

---

## Before you go live

- [ ] Replace `VITE_SITE_URL` with the real domain on both hosts.
- [ ] Replace the placeholder projects, copy and metrics.
- [ ] Add real images and drop in the actual portfolio PDF.
- [ ] Update the social profile URLs in `src/data/site.js`.
- [ ] Update the `robots.txt` sitemap URL if the domain changes.

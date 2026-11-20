/**
 * Deployment configuration.
 *
 * The site is deployed to more than one host (GitHub Pages and Vercel),
 * each with its own domain, so the canonical URL and social metadata
 * must not be hard-coded.
 *
 * Set VITE_SITE_URL at build time:
 *   VITE_SITE_URL=https://your-domain.com npm run build
 *
 * If it is not set, the value below is used. Update it once you know
 * your final domain — it drives canonical URLs, Open Graph tags and
 * the sitemap.
 */

const DEFAULT_SITE_URL = 'https://aksharasaini.com'

export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')

export const SITE_NAME = 'Akshara Saini'

export const SITE_DESCRIPTION =
  'Akshara Saini is a creative and brand strategist in Mumbai. Brand analysis, identity design, art direction, copywriting, video editing, campaign concepting and pitch decks — strategy and craft in the same head.'

export const SITE_KEYWORDS = [
  'Akshara Saini',
  'brand strategist Mumbai',
  'graphic designer Mumbai',
  'brand identity',
  'art direction',
  'copywriting',
  'video editing',
  'campaign concepting',
  'pitch deck design',
  'freelance brand consultant',
]

/**
 * Site-wide configuration.
 * Single place to update contact details, links and navigation.
 */

export const site = {
  name: 'Akshara Saini',
  shortName: 'Akshara',
  role: 'Creative & Brand Strategist',
  tagline: 'Brand strategy, design and campaigns that pull their weight.',
  location: 'Mumbai, India',
  email: 'studio.pixella24@gmail.com',
  phone: '+91 8850196670',
  description:
    'Akshara Saini is a creative and brand strategist in Mumbai working across brand analysis, graphic design, art direction, copywriting, video editing and pitch decks.',
  url: 'https://aksharasaini.com', // TODO: replace with the real domain
  locale: 'en_IN',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/', note: 'TODO: real profile URL' },
    { label: 'Behance', href: 'https://www.behance.net/', note: 'TODO: real profile URL' },
    { label: 'Instagram', href: 'https://www.instagram.com/', note: 'TODO: real profile URL' },
  ],
  // TODO: swap in the real exported PDF and confirm the path.
  portfolioPdf: {
    label: 'Portfolio PDF',
    href: '/portfolio/akshara-saini-portfolio.pdf',
    note: 'TODO: place the exported PDF here (see README)',
  },
}

export const nav = [
  { label: 'Who Am I', to: '/who-am-i', index: '01' },
  { label: 'Why You Need Me', to: '/why-you-need-me', index: '02' },
  { label: "What's So Different", to: '/whats-different', index: '03' },
  { label: 'What Can I Do', to: '/what-can-i-do', index: '04' },
  { label: 'Work', to: '/work', index: '05' },
  { label: "What's Next", to: '/whats-next', index: '06' },
]

/**
 * Disciplines. Each one gets its own space on /work — visitors browse by
 * discipline rather than scrolling one giant grid.
 */
export const disciplines = [
  {
    slug: 'brand-strategy',
    name: 'Brand Strategy & Analysis',
    short: 'Strategy',
    blurb:
      'Positioning, audience mapping and a clear read on where the brand actually stands before a single pixel moves.',
    accent: 'vermilion',
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    short: 'Design',
    blurb:
      'Identity systems, campaign collateral, packaging and social assets built to scale without falling apart.',
    accent: 'lime',
  },
  {
    slug: 'art-direction',
    name: 'Art Direction',
    short: 'Art Direction',
    blurb:
      'Shoot concepts, visual references and moodboards that give a designer or photographer somewhere specific to aim.',
    accent: 'vermilion',
  },
  {
    slug: 'copywriting',
    name: 'Copywriting',
    short: 'Copy',
    blurb:
      'Hooks, scripts, lifecycle email and landing copy written around what the reader is actually hesitating about.',
    accent: 'lime',
  },
  {
    slug: 'video-editing',
    name: 'Video Editing',
    short: 'Video',
    blurb:
      'Short-form edits, launch films and ad cutdowns tightened for the first three seconds and the last frame.',
    accent: 'vermilion',
  },
  {
    slug: 'campaign-concepting',
    name: 'Campaign Concepting',
    short: 'Campaigns',
    blurb:
      'New concepts, relaunches, festive moments and product launches — each with the idea and the reason behind it.',
    accent: 'lime',
  },
  {
    slug: 'pitch-decks',
    name: 'Pitch Deck Creation',
    short: 'Decks',
    blurb:
      'Client and investor decks that lead with the argument instead of burying it under the table of contents.',
    accent: 'vermilion',
  },
]

/** Look up a single discipline by its slug. */
export function disciplineBySlug(slug) {
  return disciplines.find((d) => d.slug === slug)
}

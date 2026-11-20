/**
 * Route metadata — the single source of truth for per-page SEO.
 *
 * Used by the server renderer to emit <title>, meta description,
 * canonical and Open Graph tags into the static HTML, and by the client
 * to keep the live document in sync during client-side navigation.
 */

import { disciplines } from './site'
import { projects } from './projects'
import { SITE_URL } from './config'

export { SITE_URL }

export const routes = [
  {
    path: '/',
    title: 'Akshara Saini — Creative & Brand Strategist | Brand Strategy, Design & Campaigns',
    description:
      'Akshara Saini is a creative and brand strategist in Mumbai. Brand analysis, identity design, art direction, copywriting, video editing, campaign concepting and pitch decks — strategy and craft in the same head.',
  },
  {
    path: '/who-am-i',
    title: 'Who Am I — Akshara Saini | Creative & Brand Strategist',
    description:
      'A brand strategist and designer in Mumbai with a BA in Multimedia & Mass Communication. Experience across brand analysis, identity, campaigns, copy, art direction and video.',
  },
  {
    path: '/why-you-need-me',
    title: 'Why You Need Me — Akshara Saini | Brand Strategy & Design',
    description:
      'Six structural reasons to hire a strategist who also designs: the brief is often wrong, the idea gets lost between people, creative needs to be judged, and the work has to survive handover.',
  },
  {
    path: '/whats-different',
    title: "What's So Different About Me — Akshara Saini",
    description:
      'Strategy and craft in the same head. Behaviour-led creative, copy written first, benchmarks set before launch, and handover that survives someone else taking over.',
  },
  {
    path: '/what-can-i-do',
    title: 'What Can I Do For You — Akshara Saini | Services',
    description:
      'Brand strategy and analysis, graphic design, art direction, copywriting, video editing, campaign concepting and pitch deck creation — plus the six-phase process I follow on every brief.',
  },
  {
    path: '/work',
    title: 'The Work — Akshara Saini | Brand Strategy, Design & Campaigns',
    description:
      'Case studies, process breakdowns and visual work, organised by discipline: strategy, design, art direction, copy, video, campaigns and pitch decks.',
  },
  {
    path: '/whats-next',
    title: "What's Next — Akshara Saini | Start a Project",
    description:
      'Start a project, book a call, or download the deck. Send the brief and get a reply within two working days.',
  },
]

/** Discipline landing pages. */
export const disciplineRoutes = disciplines.map((discipline) => ({
  path: `/work/${discipline.slug}`,
  title: `${discipline.name} — Work | Akshara Saini`,
  description: `${discipline.blurb} Case studies, process breakdowns and visual work by Akshara Saini.`,
  discipline: discipline.slug,
}))

/** Individual case studies. */
export const projectRoutes = projects.map((project) => ({
  path: `/work/${project.discipline}/${project.slug}`,
  title: `${project.title} — ${project.client} | Akshara Saini`,
  description: project.summary,
  discipline: project.discipline,
}))

/** Every route the build should prerender. */
export const allRoutes = [...routes, ...disciplineRoutes, ...projectRoutes]

/** Look up metadata for a pathname. */
export function metaForPath(pathname) {
  const clean = pathname.replace(/\/$/, '') || '/'
  return (
    allRoutes.find((route) => route.path === clean) || {
      path: clean,
      title: 'Akshara Saini — Creative & Brand Strategist',
      description:
        'Portfolio of Akshara Saini — brand strategist and designer working across brand strategy, graphic design, art direction, copywriting, video editing, campaigns and pitch decks.',
    }
  )
}

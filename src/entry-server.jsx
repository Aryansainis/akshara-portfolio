import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
// React Router v7 exposes StaticRouter from the package root; the
// `react-router-dom/server` subpath was removed in v7.
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { metaForPath, SITE_URL, allRoutes } from './data/routes'

export { allRoutes }

/**
 * Server entry for static generation.
 *
 * Renders a route to plain HTML plus the head tags it needs. The build
 * script calls this once per route and writes the result to disk, so
 * GitHub Pages serves real static files (clean URLs, working metadata)
 * and the client hydrates them rather than rebuilding them from scratch.
 */
export function render(url) {
  const pathname = url.split('?')[0]
  const meta = metaForPath(pathname)

  const html = renderToString(
    <StrictMode>
      <StaticRouter location={pathname}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )

  // GitHub Pages serves each prerendered route as a directory index
  // (e.g. /work/graphic-design/), so the canonical must carry the
  // trailing slash to match the URL that is actually served.
  const canonical = `${SITE_URL}${pathname === '/' ? '/' : `${pathname}/`}`

  const head = `
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${SITE_URL}/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${SITE_URL}/og-image.jpg" />`

  return { html, head, meta }
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

#!/usr/bin/env node
/**
 * Static site build.
 *
 * 1. Builds the client bundle with Vite.
 * 2. Builds a server-side bundle of the same app.
 * 3. Renders every route to static HTML and writes it to dist/<route>/index.html,
 *    so GitHub Pages serves clean URLs with correct per-page metadata.
 * 4. Emits 404.html and a sitemap covering every route.
 *
 * Run: npm run build
 */

import { build } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { mkdir, writeFile, readFile, rm, cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const outDir = resolve(root, 'dist')
const base = process.env.BASE_PATH || '/'

const log = (message) => console.log(`\x1b[38;5;208m▸\x1b[0m ${message}`)

async function main() {
  /* ---------------------------------------------------------------- */
  /* 1. Client bundle                                                   */
  /* ---------------------------------------------------------------- */
  log('Building client bundle…')

  await build({
    root,
    base,
    configFile: resolve(root, 'vite.config.js'),
    build: {
      outDir,
      emptyOutDir: true,
      ssrManifest: false,
    },
  })

  /* ---------------------------------------------------------------- */
  /* 2. Server bundle for rendering                                     */
  /* ---------------------------------------------------------------- */
  log('Building server bundle…')

  const serverOutDir = resolve(root, '.ssr-build')

  process.env.SSR_BUILD = 'true'

  await build({
    root,
    base,
    configFile: resolve(root, 'vite.config.js'),
    build: {
      outDir: serverOutDir,
      emptyOutDir: true,
      ssr: true,
      rollupOptions: {
        input: resolve(root, 'src/entry-server.jsx'),
        output: {
          entryFileNames: 'entry-server.js',
        },
      },
    },
  })

  // `allRoutes` comes from the server bundle rather than the source file:
  // the raw source uses extensionless imports, which Node's ESM loader
  // cannot resolve outside a bundler.
  const { render, allRoutes } = await import(
    pathToFileURL(resolve(serverOutDir, 'entry-server.js')).href
  )

  /* ---------------------------------------------------------------- */
  /* 3. Render each route to static HTML                                 */
  /* ---------------------------------------------------------------- */
  const template = await readFile(resolve(outDir, 'index.html'), 'utf8')

  // The client entry script path is injected by Vite into the built
  // index.html; we reuse it for every generated route.
  const scriptMatch = template.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/)
  if (!scriptMatch) throw new Error('Could not locate the client entry script in the built index.html')
  const clientScript = scriptMatch[1]

  /* ---------------------------------------------------------------- */
  /* Per-route head tags                                                */
  /*                                                                   */
  /* The source index.html carries default values for these so the      */
  /* dev server has sensible metadata. For the prerendered build the    */
  /* server renderer supplies route-specific values, so the defaults    */
  /* are stripped first — otherwise every page would ship duplicate     */
  /* title, description, canonical and OG tags.                         */
  /* ---------------------------------------------------------------- */

  const PER_ROUTE_TAGS = [
    /<title>[\s\S]*?<\/title>/,
    /<meta\s+name="description"[^>]*>/,
    /<link\s+rel="canonical"[^>]*>/,
    /<meta\s+property="og:title"[^>]*>/,
    /<meta\s+property="og:description"[^>]*>/,
    /<meta\s+property="og:url"[^>]*>/,
    /<meta\s+property="og:image"[^>]*>/,
    /<meta\s+property="og:image:width"[^>]*>/,
    /<meta\s+property="og:image:height"[^>]*>/,
    /<meta\s+name="twitter:title"[^>]*>/,
    /<meta\s+name="twitter:description"[^>]*>/,
    /<meta\s+name="twitter:image"[^>]*>/,
  ]

  let pageTemplate = template
  for (const pattern of PER_ROUTE_TAGS) {
    pageTemplate = pageTemplate.replace(pattern, '')
  }

  // Re-insert the title placeholder that the renderer fills in.
  pageTemplate = pageTemplate.replace(
    /(<meta\s+charset="UTF-8"\s*\/?>)/,
    '$1\n    <!--{{HEAD}}-->',
  )

  // Rewrite the domain inside the JSON-LD structured data so it matches
  // the deployment target.
  const siteUrl = (process.env.VITE_SITE_URL || 'https://aksharasaini.com').replace(/\/$/, '')
  pageTemplate = pageTemplate.replace(/https:\/\/aksharasaini\.com/g, siteUrl)

  const rootRegex = /<div id="root"><\/div>/

  log(`Rendering ${allRoutes.length} routes…`)

  for (const route of allRoutes) {
    const { html, head } = render(route.path)

    let page = pageTemplate.replace('<!--{{HEAD}}-->', head.trim())
    page = page.replace(rootRegex, `<div id="root">${html}</div>`)

    const routePath = route.path === '/' ? outDir : resolve(outDir, route.path.slice(1))
    await mkdir(routePath, { recursive: true })
    await writeFile(resolve(routePath, 'index.html'), page, 'utf8')
  }

  /* ---------------------------------------------------------------- */
  /* 4. 404 page and sitemap                                            */
  /* ---------------------------------------------------------------- */
  log('Writing 404 page…')

  const notFoundHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page not found — Akshara Saini</title>
    <meta name="robots" content="noindex" />
    <link rel="icon" href="${base}favicon.svg" type="image/svg+xml" />
    <style>
      body { margin:0; min-height:100vh; display:grid; place-items:center; background:#f2ebdf; color:#15120d;
             font-family: system-ui, -apple-system, "Segoe UI", sans-serif; text-align:center; padding:2rem; }
      h1 { font-size: clamp(3rem, 12vw, 7rem); margin:0; letter-spacing:-0.02em; line-height:.9; }
      p { max-width: 34rem; margin:1.5rem auto 0; line-height:1.6; color:#4a4034; }
      a { display:inline-block; margin-top:2rem; padding:.8rem 1.6rem; background:#15120d; color:#f2ebdf;
          text-decoration:none; font-size:.8rem; letter-spacing:.12em; text-transform:uppercase;
          border:2px solid #15120d; box-shadow:6px 6px 0 #f04a17; }
      a:hover { transform:translate(-2px,-2px); box-shadow:8px 8px 0 #f04a17; }
    </style>
  </head>
  <body>
    <main>
      <h1>404</h1>
      <p>This page went missing. The work is still here — head back to the start and pick up where you left off.</p>
      <a href="${base}">Back to the portfolio</a>
    </main>
  </body>
</html>
`
  await writeFile(resolve(outDir, '404.html'), notFoundHtml, 'utf8')

  log('Writing sitemap…')

  // The site URL comes from VITE_SITE_URL so each deployment can
  // declare its own domain (GitHub Pages vs Vercel).
  const normalisedSiteUrl = siteUrl
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    const loc =
      route.path === '/' ? `${normalisedSiteUrl}/` : `${normalisedSiteUrl}${route.path}/`
    return `  <url><loc>${loc}</loc></url>`
  })
  .join('\n')}
</urlset>
`
  await writeFile(resolve(outDir, 'sitemap.xml'), sitemap, 'utf8')

  /* ---------------------------------------------------------------- */
  /* 5. Clean up                                                        */
  /* ---------------------------------------------------------------- */
  await rm(serverOutDir, { recursive: true, force: true })

  // GitHub Pages: never run the output through Jekyll.
  await writeFile(resolve(outDir, '.nojekyll'), '', 'utf8')

  log(`\n\x1b[38;5;208m✓\x1b[0m Build complete — ${allRoutes.length} pages in dist/`)
  log(`  Client entry: ${clientScript}`)
  log(`  Base path:    ${base}`)
}

main().catch((error) => {
  console.error('\n\x1b[38;5;203m✗ Build failed\x1b[0m')
  console.error(error)
  process.exit(1)
})

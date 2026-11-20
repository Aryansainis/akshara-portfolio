#!/usr/bin/env node
/**
 * Builds the downloadable portfolio PDF from the live site content.
 *
 * Each section is rendered with the headless browser, its markup is
 * collected, and all sections are composed into one document that is
 * printed to a single A4 PDF. Building it from the live site keeps the
 * deck in sync with the content instead of maintaining a second copy.
 *
 * Run: npm run pdf
 */

import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import { resolve, dirname, join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'node:http'
import { chromium } from 'playwright'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const outputDir = resolve(root, 'public/portfolio')
const outputFile = resolve(outputDir, 'akshara-saini-portfolio.pdf')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
}

/** Sections to include, in order. */
const SECTIONS = [
  { path: '/', label: 'Cover & Introduction' },
  { path: '/who-am-i', label: 'Who Am I' },
  { path: '/what-can-i-do', label: 'What Can I Do For You' },
  { path: '/whats-different', label: "What's So Different About Me" },
  { path: '/work', label: 'Selected Work' },
  { path: '/whats-next', label: "What's Next" },
]

/**
 * Minimal static server for the built site.
 * Resolves clean URLs to their index.html, matching how GitHub Pages
 * and Vercel serve the prerendered output.
 */
function serveStatic(dir, port) {
  const server = createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent(req.url.split('?')[0])
      let filePath = join(dir, urlPath)

      let info = await stat(filePath).catch(() => null)
      if (info?.isDirectory()) {
        filePath = join(filePath, 'index.html')
        info = await stat(filePath).catch(() => null)
      }
      if (!info) {
        filePath = join(filePath, 'index.html')
        info = await stat(filePath).catch(() => null)
      }
      if (!info) {
        res.writeHead(404).end('Not found')
        return
      }

      const body = await readFile(filePath)
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' })
      res.end(body)
    } catch {
      res.writeHead(500).end('Server error')
    }
  })

  return new Promise((resolvePromise) => {
    server.listen(port, () => resolvePromise(server))
  })
}

async function main() {
  await mkdir(outputDir, { recursive: true })

  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } })

  const server = await serveStatic(resolve(root, 'dist'), 4178)
  const base = 'http://localhost:4178'

  const collected = []

  for (const section of SECTIONS) {
    await page.goto(`${base}${section.path}`, { waitUntil: 'networkidle' })

    // Force the reveal animations to their final state so nothing is
    // captured mid-fade, and hide the decorative texture layers. The
    // grain overlay is a rasterised turbulence filter that would
    // otherwise be embedded into every page and balloon the file size.
    await page.addStyleTag({
      content: `
        .grain, .halftone, .tape, .hero__shape, .skip-link { display: none !important; }
        [data-reveal] { opacity: 1 !important; transform: none !important;
                        clip-path: none !important; transition: none !important; }
        * { animation: none !important; }
      `,
    })
    await page.evaluate(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(400)

    const html = await page.evaluate(() => {
      const main = document.getElementById('main')
      return main ? main.innerHTML : ''
    })

    collected.push({ label: section.label, html })
  }

  // Compose every section into one document and print it as a single
  // PDF. Screen media is used so the desktop layout is preserved.
  await page.emulateMedia({ media: 'screen' })
  await page.setViewportSize({ width: 1400, height: 1000 })

  // The built stylesheet has a content hash in its filename, so read
  // the real path out of the generated index.html.
  const builtHtml = await readFile(resolve(root, 'dist/index.html'), 'utf8')
  const cssMatch = builtHtml.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+\.css)"/)
  if (!cssMatch) throw new Error('Could not locate the built stylesheet in dist/index.html')
  const stylesheetHref = cssMatch[1]

  const composed = `
<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<link rel="stylesheet" href="${stylesheetHref}">
<style>
  @page { size: A4; margin: 14mm 12mm 16mm; }
  html, body { background: #f2ebdf !important; }
  body { margin: 0; }
  .pdf-section { break-after: page; page-break-after: always; }
  .pdf-section:last-child { break-after: auto; page-break-after: auto; }
  .pdf-section__label {
    font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: .16em;
    text-transform: uppercase; color: #c2330b; margin: 0 0 8px;
    padding-bottom: 6px; border-bottom: 1px solid rgba(21,18,13,.16);
  }
  .grain, .halftone, .tape, .hero__shape, .skip-link, .header, .footer,
  .scroll-progress, .drawer, .nav-toggle { display: none !important; }
  [data-reveal] { opacity: 1 !important; transform: none !important;
                  clip-path: none !important; transition: none !important; }
  * { animation: none !important; }
  .hero { padding-top: 24px; padding-bottom: 18px; }
  .section { padding-block: 28px; }
  .on-ink { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
</style></head>
<body>
${collected
  .map(
    (section) => `
  <section class="pdf-section">
    <p class="pdf-section__label">${section.label}</p>
    ${section.html}
  </section>`,
  )
  .join('\n')}
</body></html>`

  await page.setContent(composed, { waitUntil: 'networkidle' })

  await page.pdf({
    path: outputFile,
    format: 'A4',
    printBackground: true,
    margin: { top: '14mm', bottom: '16mm', left: '12mm', right: '12mm' },
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="width:100%;font-size:8px;font-family:Helvetica,Arial,sans-serif;color:#8a857c;
                  padding:0 12mm;display:flex;justify-content:space-between;">
        <span>Akshara Saini — Creative &amp; Brand Strategist</span>
        <span class="pageNumber"></span>
      </div>`,
  })

  server.close()
  await browser.close()

  console.log(`✓ Portfolio PDF written to public/portfolio/akshara-saini-portfolio.pdf`)
  console.log('  Sections:', SECTIONS.map((s) => s.label).join(', '))
}

main().catch((error) => {
  console.error('✗ PDF generation failed')
  console.error(error)
  process.exit(1)
})

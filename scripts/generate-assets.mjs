#!/usr/bin/env node
/**
 * Generates the raster icons that the meta tags reference:
 *   - public/favicon.ico        (legacy fallback, 32x32)
 *   - public/apple-touch-icon.png (180x180)
 *   - public/og-image.jpg       (1200x630 social share card)
 *
 * The icons are rendered from the same SVG as favicon.svg so the brand
 * mark stays consistent everywhere.
 *
 * Run: npm run assets
 */

import { writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const publicDir = resolve(root, 'public')

const INK = '#15120d'
const PAPER = '#f2ebdf'
const LIME = '#d6f55b'
const VERMILION = '#f04a17'

/** The brand mark, inlined so the page can be screenshotted directly. */
const MARK_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" fill="${INK}"/>
  <g transform="rotate(-3 32 32)">
    <rect x="10" y="12" width="44" height="40" fill="${LIME}"/>
    <text x="32" y="46" font-family="Arial Narrow, Helvetica, Arial, sans-serif" font-size="38"
          font-weight="700" fill="${INK}" text-anchor="middle" letter-spacing="-1">A</text>
  </g>
  <path d="M6 56 L58 50" stroke="${VERMILION}" stroke-width="4" stroke-linecap="round"/>
</svg>`

/** Square icon page — the mark on the ink background. */
const iconPage = `
<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;background:${INK};width:100%;height:100%;overflow:hidden}
  .wrap{width:100%;height:100%;display:grid;place-items:center}
  svg{width:86%;height:86%}
</style></head><body><div class="wrap">${MARK_SVG}</div></body></html>`

/** Social share card — 1200x630, on brand paper. */
const ogPage = `
<!doctype html><html><head><meta charset="utf-8"><style>
  @import url('data:text/css,');
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;width:1200px;height:630px;overflow:hidden}
  body{
    background:${PAPER};color:${INK};position:relative;
    font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  .grain{position:absolute;inset:0;opacity:.5;mix-blend-mode:multiply;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E");
  }
  .halftone{position:absolute;top:-120px;right:-120px;width:620px;height:620px;border-radius:50%;
    background-image:radial-gradient(${INK} 1.2px,transparent 1.6px);background-size:11px 11px;opacity:.13}
  .rule{position:absolute;left:0;top:0;right:0;height:12px;background:${VERMILION}}
  .inner{position:relative;padding:74px 78px;height:100%;display:flex;flex-direction:column;justify-content:space-between}
  .mark{width:92px;height:92px}
  .eyebrow{font-family:'Courier New',monospace;font-size:19px;letter-spacing:.2em;text-transform:uppercase;color:#4a4034}
  h1{font-size:104px;line-height:.86;letter-spacing:-.02em;margin:14px 0 0;text-transform:uppercase;font-weight:700}
  h1 .accent{color:#c2330b}
  .bottom{display:flex;justify-content:space-between;align-items:flex-end;gap:40px}
  .tag{font-family:'Courier New',monospace;font-size:23px;letter-spacing:.1em;text-transform:uppercase;max-width:640px;line-height:1.45;color:#241e16}
  .stamp{flex-shrink:0;width:172px;height:172px;border:5px solid ${INK};background:${LIME};
    display:grid;place-items:center;transform:rotate(-7deg);box-shadow:9px 9px 0 ${INK}}
  .stamp span{font-family:'Courier New',monospace;font-size:20px;letter-spacing:.1em;text-transform:uppercase;text-align:center;line-height:1.35}
  .scribble{position:absolute;left:78px;bottom:196px;width:296px;height:16px}
  .scribble path{fill:none;stroke:${VERMILION};stroke-width:6;stroke-linecap:round}
</style></head><body>
  <div class="rule"></div>
  <div class="grain"></div>
  <div class="halftone"></div>
  <div class="inner">
    <div>
      <div class="mark">${MARK_SVG}</div>
      <p class="eyebrow" style="margin-top:34px">Mumbai &nbsp;·&nbsp; Brand &amp; Creative</p>
      <h1>Creative &amp;<br><span class="accent">Brand</span> Strategist</h1>
      <svg class="scribble" viewBox="0 0 100 8" preserveAspectRatio="none">
        <path d="M1 5.2 C 18 1.4, 34 6.8, 52 3.4 S 84 6.4, 99 2.4"/>
      </svg>
    </div>
    <div class="bottom">
      <p class="tag">Strategy · Design · Art Direction<br>Copy · Video · Campaigns · Decks</p>
      <div class="stamp"><span>Akshara<br>Saini</span></div>
    </div>
  </div>
</body></html>`

/**
 * Renders an HTML page to a PNG buffer at the given size.
 */
async function renderPng(page, html, width, height) {
  await page.setViewportSize({ width, height })
  await page.setContent(html, { waitUntil: 'networkidle' })
  return page.screenshot({ type: 'png', omitBackground: false })
}

/**
 * Packs PNG buffers into a single .ico container.
 * ICO supports embedded PNG data for entries 256x256 and smaller.
 */
function buildIco(pngBuffers) {
  const count = pngBuffers.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0) // reserved
  header.writeUInt16LE(1, 2) // type: icon
  header.writeUInt16LE(count, 4)

  const entries = []
  let offset = 6 + count * 16

  for (const { size, data } of pngBuffers) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0) // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1) // height
    entry.writeUInt8(0, 2) // palette
    entry.writeUInt8(0, 3) // reserved
    entry.writeUInt16LE(1, 4) // colour planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(data.length, 8)
    entry.writeUInt32LE(offset, 12)
    entries.push(entry)
    offset += data.length
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map((p) => p.data)])
}

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ deviceScaleFactor: 1 })

  // --- favicon.ico: 16, 32 and 48 px ---
  const icoSizes = [16, 32, 48]
  const pngBuffers = []
  for (const size of icoSizes) {
    const data = await renderPng(page, iconPage, size, size)
    pngBuffers.push({ size, data })
  }
  await writeFile(resolve(publicDir, 'favicon.ico'), buildIco(pngBuffers))
  console.log('✓ favicon.ico')

  // --- apple-touch-icon.png: 180x180 ---
  const touchIcon = await renderPng(page, iconPage, 180, 180)
  await writeFile(resolve(publicDir, 'apple-touch-icon.png'), touchIcon)
  console.log('✓ apple-touch-icon.png')

  // --- og-image.jpg: 1200x630 ---
  await page.setViewportSize({ width: 1200, height: 630 })
  await page.setContent(ogPage, { waitUntil: 'networkidle' })
  const ogImage = await page.screenshot({ type: 'jpeg', quality: 88 })
  await writeFile(resolve(publicDir, 'og-image.jpg'), ogImage)
  console.log('✓ og-image.jpg')

  await browser.close()
}

main().catch((error) => {
  console.error('✗ Asset generation failed')
  console.error(error)
  process.exit(1)
})

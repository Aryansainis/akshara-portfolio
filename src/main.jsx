import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { useDocumentMeta, useScrollToTop } from './hooks/useRouteEffects'

import '@fontsource/anton'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import '@fontsource-variable/inter'

import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/texture.css'
import './styles/components.css'
import './styles/pages.css'

/**
 * Root router. `basename` is derived from Vite's BASE_PATH so the site
 * works at a GitHub Pages sub-path (e.g. /akshara-portfolio/) without
 * any hard-coded assumption.
 */
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

/**
 * Route-aware shell.
 *
 * These hooks call useLocation(), so they must live *inside* the
 * <BrowserRouter> — rendering them alongside it throws "useLocation()
 * may be used only in the context of a <Router> component".
 */
function RouterShell() {
  useScrollToTop()
  useDocumentMeta()

  return <App />
}

const tree = (
  <StrictMode>
    <BrowserRouter basename={basename}>
      <RouterShell />
    </BrowserRouter>
  </StrictMode>
)

const container = document.getElementById('root')

/**
 * When the page was served as a pre-rendered static file, the root
 * already contains the markup — hydrate it so there is no flash and no
 * duplicated DOM. On a plain dev server the root is empty, so we mount
 * instead.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}

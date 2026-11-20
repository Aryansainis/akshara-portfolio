import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { metaForPath } from '../data/routes'

/**
 * Restores scroll position and manages focus on route change.
 *
 * Must be called from inside a <Router> — it relies on useLocation().
 *
 * On a new route: scroll to the top (or to the hash target) and move
 * focus to the main landmark so screen reader users are told the page
 * changed. Anchor links are handled separately so they land smoothly.
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  useEffect(() => {
    const main = document.getElementById('main')
    if (!main) return
    // Only steal focus when the user navigated (not on first load).
    if (document.activeElement && document.activeElement !== document.body) {
      main.setAttribute('tabindex', '-1')
      main.focus({ preventScroll: true })
    }
  }, [pathname])
}

/**
 * Keeps the document title, description and canonical URL in sync with
 * the current route during client-side navigation.
 *
 * The prerendered pages already ship the correct values, so this only
 * has to react to in-app navigation.
 */
export function useDocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metaForPath(pathname)

    document.title = meta.title

    /** Sets the content of a <meta> tag, creating it if absent. */
    const setMeta = (keyAttr, key, content) => {
      const selector = `meta[${keyAttr}="${key}"]`
      let tag = document.head.querySelector(selector)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(keyAttr, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', `${window.location.origin}${pathname}`)

    // Keep the canonical URL pointing at the route being viewed.
    const canonicalPath = pathname === '/' ? '/' : `${pathname}/`
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${window.location.origin}${canonicalPath}`)
  }, [pathname])
}

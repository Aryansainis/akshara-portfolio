import { useEffect, useState } from 'react'

/**
 * Tracks a boolean when the element scrolls into view.
 * Used by <Reveal> to trigger the staggered entrance animations.
 *
 * `once` keeps the element visible after its first appearance (the
 * default for this site — content should not disappear on scroll-up).
 */
export function useInView(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = options
  const [inView, setInView] = useState(false)
  // `node` holds the observed element. The callback returned below is
  // what gets passed to `ref` — it must be the setter, not the state
  // value, or React never hands us the element to observe.
  const [node, setNode] = useState(null)

  useEffect(() => {
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [node, threshold, rootMargin, once])

  return [setNode, inView]
}

/**
 * True when the user has asked the OS to reduce motion.
 * Components use this to skip decorative animation entirely.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)

    const onChange = (event) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * True once the page has scrolled past `offset` pixels.
 * Drives the header's condensed state.
 */
export function useScrolled(offset = 12) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}

/**
 * Scroll progress (0 → 1) across the whole document.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return progress
}

/**
 * Locks body scroll while a full-screen drawer is open.
 * Prevents the background scrolling behind the menu on iOS.
 */
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return
    const { body } = document
    const previousOverflow = body.style.overflow
    const previousPadding = body.style.paddingRight

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPadding
    }
  }, [locked])
}

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './useScroll'

/**
 * Subtle parallax depth.
 *
 * Elements carrying `data-parallax` are translated vertically as they pass
 * through the viewport. The amount is proportional to `data-parallax`
 * (a multiplier, e.g. "0.15"), so the same hook serves a slow background
 * layer and a faster foreground one.
 *
 * Fully disabled when the user prefers reduced motion, and when the
 * viewport is narrow enough that mobile GPUs would struggle.
 */
export function useParallax() {
  const reduced = usePrefersReducedMotion()
  const ticking = useRef(false)

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(max-width: 47.99rem)').matches) return
    if (typeof IntersectionObserver === 'undefined') return

    const targets = Array.from(document.querySelectorAll('[data-parallax]'))
    if (!targets.length) return

    const update = () => {
      ticking.current = false
      const viewportHeight = window.innerHeight

      targets.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (rect.bottom < -200 || rect.top > viewportHeight + 200) return

        const strength = parseFloat(element.dataset.parallax) || 0.12
        // -1 (below fold) → 1 (above fold), centred on the viewport.
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height) - 0.5
        const offset = progress * strength * 100

        element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`)
      })
    }

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reduced])
}

/**
 * Pointer-driven tilt for elevated cards.
 * Skipped on touch devices and under reduced motion.
 */
export function useTilt() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const elements = Array.from(document.querySelectorAll('[data-tilt]'))

    const onMove = (event) => {
      const element = event.currentTarget
      const rect = element.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      element.style.setProperty('--tilt-y', `${(x * 6).toFixed(2)}deg`)
      element.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`)
    }

    const onLeave = (event) => {
      event.currentTarget.style.setProperty('--tilt-y', '0deg')
      event.currentTarget.style.setProperty('--tilt-x', '0deg')
    }

    elements.forEach((element) => {
      element.addEventListener('pointermove', onMove)
      element.addEventListener('pointerleave', onLeave)
    })

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('pointermove', onMove)
        element.removeEventListener('pointerleave', onLeave)
      })
    }
  }, [reduced])
}

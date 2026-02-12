import { useRef, useEffect, useCallback } from 'react'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Single-element scroll reveal.
 * Returns a ref to attach to the element.
 * Adds `.revealed` class when the element enters the viewport.
 */
export function useScrollReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) {
      if (el) el.classList.add('revealed')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

/**
 * Container reveal with staggered children.
 * Applies `--reveal-delay` CSS variable to each direct child with `.scroll-reveal`.
 * Options:
 *  - staggerMs: delay between each child (default 100)
 *  - maxDelay: cap total delay (useful for long lists)
 *  - threshold: intersection threshold
 */
export function useStaggerReveal({ staggerMs = 100, maxDelay = Infinity, threshold = 0.1, key = '' } = {}) {
  const ref = useRef(null)

  const applyStagger = useCallback(() => {
    const container = ref.current
    if (!container) return

    const children = container.querySelectorAll(':scope > .scroll-reveal')
    children.forEach((child, i) => {
      let delay = i * staggerMs
      if (maxDelay !== Infinity) {
        const count = children.length
        delay = count > 1 ? Math.min(delay, (maxDelay / (count - 1)) * i) : 0
      }
      child.style.setProperty('--reveal-delay', `${delay}ms`)
    })
  }, [staggerMs, maxDelay])

  useEffect(() => {
    const container = ref.current
    if (!container) return

    applyStagger()

    if (prefersReducedMotion()) {
      container.querySelectorAll(':scope > .scroll-reveal').forEach(child => {
        child.classList.add('revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.querySelectorAll(':scope > .scroll-reveal').forEach(child => {
            child.classList.add('revealed')
          })
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold, applyStagger, key])

  return ref
}

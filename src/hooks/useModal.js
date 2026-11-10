import { useEffect, useRef } from "react"

const FOCUSABLE =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'

/**
 * Shared behaviour for overlays (project sheet, Quick view, mobile menu):
 * locks page scroll, closes on Escape, traps Tab focus inside `panelRef`,
 * and restores focus to whatever was focused before it opened.
 * Call it from a component that is only mounted while the overlay is open.
 */
export default function useModal(panelRef, onClose) {
  const closeRef = useRef(onClose)

  useEffect(() => {
    closeRef.current = onClose
  })

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const focusables = () =>
      panelRef.current ? [...panelRef.current.querySelectorAll(FOCUSABLE)] : []

    const raf = requestAnimationFrame(() => focusables()[0]?.focus())

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeRef.current?.()
        return
      }
      if (e.key !== "Tab") return
      const els = focusables()
      if (!els.length) return
      const first = els[0]
      const last = els[els.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus?.({ preventScroll: true })
    }
  }, [panelRef])
}

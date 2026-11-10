import { useEffect, useRef } from "react"

/**
 * Fixed page background on true black: one soft accent glow at the top,
 * a faint cursor-follow glow (mouse/trackpad only) and very light grain.
 * Everything uses var(--accent), so the mood toggle fades teal <-> purple.
 */
export default function Aurora() {
  const glowRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    const el = glowRef.current
    let raf = 0
    let x = 0
    let y = 0

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        el.style.setProperty("--mx", `${x}px`)
        el.style.setProperty("--my", `${y}px`)
        el.style.opacity = "1"
      })
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="ambient-glow" />
      <div ref={glowRef} className="cursor-glow" />
      <div className="grain" />
    </div>
  )
}

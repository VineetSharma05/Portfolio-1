import { useEffect, useRef } from "react"

/**
 * Hero background, brought back from the previous site:
 * - a dot grid that fades out as it goes down
 * - a soft accent glow (teal, or purple with the toggle) behind it
 * - dots that light up in the accent colour around the cursor (mouse/trackpad only)
 */
export default function HeroBackdrop() {
  const rootRef = useRef(null)
  const spotRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return
    const root = rootRef.current
    const spot = spotRef.current
    let raf = 0
    let x = 0
    let y = 0

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = root.getBoundingClientRect()
        spot.style.setProperty("--mx", `${x - r.left}px`)
        spot.style.setProperty("--my", `${y - r.top}px`)
        spot.style.opacity = "1"
      })
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-glow" />
      <div className="hero-fade">
        <div className="hero-dots" />
        <div ref={spotRef} className="hero-dots-spot" />
      </div>
    </div>
  )
}

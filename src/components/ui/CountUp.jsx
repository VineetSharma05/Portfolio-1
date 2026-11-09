import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"

const format = (n) => Math.round(n).toLocaleString("en-US")

/** Counts from 0 to `to` the first time it scrolls into view. */
export default function CountUp({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setValue,
    })
    return () => controls.stop()
  }, [inView, reduce, to, duration])

  const shown = reduce ? to : value

  return (
    <span ref={ref} className="tabular-nums">
      {format(shown)}
      {suffix}
    </span>
  )
}

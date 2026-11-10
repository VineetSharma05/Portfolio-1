import { useCallback, useState } from "react"

const KEY = "mood"

const currentMood = () =>
  document.documentElement.dataset.mood === "teal" ? "teal" : "purple"

/**
 * Accent mood: "purple" (default, switch off) or "teal" (switch on).
 * The initial value is applied by an inline script in index.html before
 * first paint; this hook just reads and flips it.
 */
export default function useMood() {
  const [mood, setMood] = useState(currentMood)

  const toggle = useCallback(() => {
    const next = currentMood() === "purple" ? "teal" : "purple"
    if (next === "teal") document.documentElement.dataset.mood = "teal"
    else delete document.documentElement.dataset.mood
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage unavailable: mood just won't persist */
    }
    setMood(next)
  }, [])

  return [mood, toggle]
}

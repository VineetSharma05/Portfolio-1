import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Resets scroll to top on plain route changes (e.g. Home -> About),
// but leaves scroll position alone when a hash is present so
// Home.jsx / the browser can scroll to that section instead.
const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }
  }, [pathname, hash])

  return null
}

export default ScrollManager

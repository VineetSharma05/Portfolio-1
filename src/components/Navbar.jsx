import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const SECTION_IDS = ["about", "experience", "projects", "contact"]

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  )
  const [activeSection, setActiveSection] = useState("about")
  const location = useLocation()

  // Track which home section is in view (only matters on "/")
  useEffect(() => {
    if (location.pathname !== "/") return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
  }

  const isHome = location.pathname === "/"

  const linkClass = (id) =>
    `hover:text-foreground transition ${
      isHome && activeSection === id ? "text-foreground" : ""
    }`

  return (
    <nav className="fixed top-4 w-full z-50 flex justify-center">
      {/* STABLE HOVER ZONE */}
      <div
        className="w-[95%] max-w-6xl"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* NAV CONTAINER */}
        <div
          className={`
            mx-auto transition-all duration-500 ease-out
            bg-glass border border-glassBorder backdrop-blur-xl
            hover:shadow-lg hover:shadow-black/10
            ${expanded ? "max-w-full rounded-2xl" : "max-w-[900px] rounded-3xl"}
          `}
        >
          <div className="flex items-center justify-between px-8 py-4">

            {/* NAME → HOME */}
            <Link
              to="/"
              className="font-display text-sm font-medium tracking-wide hover:text-foreground transition"
            >
              Vineet
            </Link>

            {/* LINKS */}
            <div className="hidden md:flex gap-8 text-sm text-muted">
              <Link to="/about" className="hover:text-foreground transition">
                About
              </Link>

              <Link to="/#experience" className={linkClass("experience")}>
                Experience
              </Link>

              <Link to="/#projects" className={linkClass("projects")}>
                Projects
              </Link>

              <Link to="/#contact" className={linkClass("contact")}>
                Contact
              </Link>
            </div>

            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`
                relative w-12 h-7 rounded-full overflow-hidden
                flex items-center
                transition-colors duration-300
                ${dark
                  ? "bg-glass border border-glassBorder"
                  : "bg-accent"
                }
              `}
            >
              <span
                className={`
                  w-5 h-5 rounded-full bg-white
                  transition-transform duration-300
                  ${dark ? "translate-x-1" : "translate-x-6"}
                `}
              />
            </button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

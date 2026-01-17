import { useEffect, useState } from "react"

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [dark, setDark] = useState(true)

  // Sync theme on load
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setDark(isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle("dark", next)
  }

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
            
            {/* NAME */}
            <span className="text-sm font-medium tracking-wide">
              Vineet
            </span>

            {/* LINKS */}
            <div className="hidden md:flex gap-8 text-sm text-muted">
              <a href="#about" className="hover:text-foreground transition">
                About
              </a>
              <a href="#projects" className="hover:text-foreground transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-foreground transition">
                Contact
              </a>
            </div>

            {/* THEME TOGGLE — FIXED */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`
                relative w-12 h-7 rounded-full overflow-hidden
                flex items-center
                transition-colors duration-300
                ${dark
                  ? "bg-glass border border-glassBorder"
                  : "bg-[#34C759]"
                }
              `}
            >
              {/* KNOB */}
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

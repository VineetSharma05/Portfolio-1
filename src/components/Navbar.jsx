import { useEffect, useState } from "react"

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [dark, setDark] = useState(true)

  // Sync initial theme with HTML class
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
        {/* ANIMATED NAVBAR */}
        <div
          className={`
            mx-auto transition-all duration-500 ease-out
            bg-glass border border-glassBorder backdrop-blur-xl
            hover:shadow-lg hover:shadow-black/10
            ${expanded ? "max-w-full rounded-2xl" : "max-w-[900px] rounded-3xl"}
          `}
        >
          <div className="flex items-center justify-between px-8 py-4">
            
            {/* Name */}
            <span className="text-sm font-medium tracking-wide">
              Vineet
            </span>

            {/* Links */}
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

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`
                relative w-11 h-6 rounded-full transition-colors duration-300
                ${dark ? "bg-glass border border-glassBorder" : "bg-[#34C759]"}
              `}
            >
              <span
                className={`
                  absolute top-0.5 left-0.5
                  w-5 h-5 rounded-full bg-white
                  transition-transform duration-300
                  ${dark ? "translate-x-0" : "translate-x-5"}
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

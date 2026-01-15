import { useState } from "react"

const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const [dark, setDark] = useState(true)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <nav className="fixed top-4 w-full z-50 flex justify-center">
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`
          transition-all duration-500 ease-out
          bg-glass border border-glassBorder backdrop-blur-xl
          ${expanded ? "w-[900px] rounded-3xl" : "w-[95%] rounded-2xl"}
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
            className="relative w-11 h-6 rounded-full bg-glass border border-glassBorder transition"
          >
            <span
              className={`
                absolute top-0.5 transition-all duration-300
                w-5 h-5 rounded-full bg-foreground
                ${dark ? "left-0.5" : "left-5"}
              `}
            />
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar

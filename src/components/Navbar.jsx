import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

import useMood from "../hooks/useMood"
import useModal from "../hooks/useModal"
import MoodToggle from "./MoodToggle"
import { Bolt, Close, Menu } from "./ui/icons"
import { EASE } from "../lib/motion"

// "top" (hero) and "skills" have no nav link; observing them clears the highlight
const SECTION_IDS = ["top", "work", "experience", "skills", "contact"]

const LINKS = [
  { label: "Work", to: "/#work", id: "work" },
  { label: "Experience", to: "/#experience", id: "experience" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/#contact", id: "contact" },
]

export default function Navbar({ onQuickView }) {
  const [mood, toggleMood] = useMood()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8)
  const [activeSection, setActiveSection] = useState(null)
  const location = useLocation()
  const isHome = location.pathname === "/"

  // Darken the bar once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Highlight the section currently in view (home page only)
  useEffect(() => {
    if (!isHome) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isHome])

  const isActive = (link) =>
    link.id ? isHome && activeSection === link.id : location.pathname === link.to

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-apple
          border-b
          ${scrolled
            ? "bg-background/70 backdrop-blur-2xl backdrop-saturate-150 border-white/[0.07]"
            : "bg-transparent border-transparent"}
        `}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
          {/* NAME */}
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Vineet Sharma
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-1 text-[13px]">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`
                    relative rounded-full px-3.5 py-2 transition duration-300
                    ${isActive(link) ? "text-foreground" : "text-muted hover:text-foreground"}
                  `}
                >
                  {isActive(link) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                      transition={{ duration: 0.45, ease: EASE }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onQuickView}
              className="
                hidden sm:inline-flex items-center gap-1.5 rounded-full
                border border-white/10 bg-white/[0.04] px-3.5 py-1.5
                text-[12px] font-medium text-foreground/90
                hover:border-accent/50 hover:text-foreground transition duration-300
              "
            >
              <Bolt size={13} className="text-accent" />
              Quick view
            </button>

            <span className="hidden md:inline-flex">
              <MoodToggle mood={mood} onToggle={toggleMood} showLabel />
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="md:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/[0.06] transition"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            onClose={() => setMenuOpen(false)}
            onQuickView={() => {
              setMenuOpen(false)
              onQuickView()
            }}
            mood={mood}
            onToggleMood={toggleMood}
            isActive={isActive}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function MobileMenu({ onClose, onQuickView, mood, onToggleMood, isActive }) {
  const panelRef = useRef(null)
  useModal(panelRef, onClose)

  return (
    <motion.div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="fixed inset-0 z-[60] flex flex-col bg-background/90 backdrop-blur-2xl md:hidden"
    >
      <div className="flex h-16 items-center justify-between px-6">
        <span className="font-display text-[15px] font-semibold tracking-tight">Menu</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/[0.06] transition"
        >
          <Close size={20} />
        </button>
      </div>

      <ul className="mt-6 px-6">
        {LINKS.map((link, i) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.05 }}
            className="border-b border-white/[0.07]"
          >
            <Link
              to={link.to}
              onClick={onClose}
              className={`block py-4 font-display text-3xl font-semibold tracking-tight ${
                isActive(link) ? "text-foreground" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="mt-auto space-y-4 px-6 pb-10">
        <button
          type="button"
          onClick={onQuickView}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] py-3.5 text-sm font-medium"
        >
          <Bolt size={15} className="text-accent" />
          Quick view: résumé in one screen
        </button>
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
          <span className="text-sm text-muted">Glow colour</span>
          <MoodToggle mood={mood} onToggle={onToggleMood} />
        </div>
      </div>
    </motion.div>
  )
}

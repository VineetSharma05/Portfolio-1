import { useEffect } from "react"
import { motion } from "framer-motion"

const About = () => {

  // GLOBAL cursor tracking (prevents freezing)
  useEffect(() => {
    const section = document.getElementById("about")

    const handleMove = (e) => {
      if (!document.documentElement.classList.contains("dark")) return
      if (!section) return

      const rect = section.getBoundingClientRect()

      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      section.style.setProperty("--mx", `${x}px`)
      section.style.setProperty("--my", `${y}px`)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        {/* ---------- LIGHT MODE: STATIC DOT GRID ---------- */}
        <div
          className="
            absolute inset-0
            dark:hidden
            bg-[radial-gradient(circle,rgba(0,0,0,0.18)_1.5px,transparent_1.5px)]
            [background-size:22px_22px]
          "
        />

        {/* ---------- LIGHT MODE: SOFT PAPER HIGHLIGHT ---------- */}
        <div
          className="
            absolute inset-0
            dark:hidden
            bg-[radial-gradient(300px_circle_at_50%_20%,rgba(0,0,0,0.10),transparent_70%)]
          "
        />

        {/* ---------- LIGHT MODE: DOT FADE OUT ---------- */}
        <div
          className="
            absolute inset-0
            dark:hidden
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,var(--bg)_75%)]
          "
        />

        {/* ---------- DARK MODE: CURSOR-REVEALED DOT GRID ---------- */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[radial-gradient(circle,rgba(255,255,255,0.40)_1.5px,transparent_1.5px)]
            [background-size:22px_22px]
            [mask-image:radial-gradient(280px_circle_at_var(--mx)_var(--my),black_0%,transparent_70%)]
            [-webkit-mask-image:radial-gradient(280px_circle_at_var(--mx)_var(--my),black_0%,transparent_70%)]
            transition-[mask-position] duration-150 ease-out
          "
        />

        {/* ---------- DARK MODE: SOFT HALO (accent-tinted) ---------- */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[radial-gradient(480px_circle_at_var(--mx)_var(--my),var(--accent-soft),transparent_70%)]
          "
        />

        {/* ---------- DARK MODE: FADE OUT ---------- */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,var(--bg)_75%)]
          "
        />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="min-h-screen flex items-center pt-24">
        <div className="max-w-5xl mx-auto px-6 w-full">

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-accent"
          >
            Bengaluru, India — Open to opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            Hi, I’m Vineet.<br />I build things people actually use.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-8 max-w-2xl text-muted text-lg"
          >
            An engineer working across AI, scalable systems, and product —
            built for the masses, not just a demo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 max-w-2xl text-muted"
          >
            Outside of code I’m into cars, sports, and tech in general.
            On a team, I like to collaborate, learn fast, and lead when it counts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-foreground text-background text-sm font-medium
                hover:opacity-90 transition
              "
            >
              View selected work →
            </a>
            <a
              href="#experience"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl
                border border-glassBorder text-sm font-medium
                hover:bg-glass transition
              "
            >
              See experience
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About

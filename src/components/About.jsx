import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        {/* ---------- LIGHT MODE DOT GRID (BASE) ---------- */}
        <div
          className="
            absolute inset-0
            dark:hidden
            bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1px)]
            [background-size:22px_22px]
          "
        />

        {/* ---------- LIGHT MODE SOFT DEPTH ---------- */}
        <div
          className="
            absolute top-0 left-0 right-0 h-[50vh]
            dark:hidden
            bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.08),transparent_65%)]
          "
        />

        {/* ---------- LIGHT MODE TOP SURFACE SHADOW ---------- */}
        <div
          className="
            absolute top-0 left-0 right-0 h-[40vh]
            dark:hidden
            bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.04),transparent)]
          "
        />

        {/* ---------- LIGHT MODE DOT FADE (BOTTOM) ---------- */}
        <div
          className="
            absolute inset-0
            dark:hidden
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,white_75%)]
          "
        />

        {/* ---------- DARK MODE DOT GRID (BASE) ---------- */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)]
            [background-size:22px_22px]
          "
        />

        {/* ---------- DARK MODE SPOTLIGHT ---------- */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_70%)]
          "
        />

        {/* ---------- DARK MODE DOT FADE (BOTTOM) ---------- */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,black_75%)]
          "
        />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6">
          
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            I design and build systems<br />that solve real problems.
          </h1>

          <p className="mt-8 max-w-2xl text-muted text-lg">
            I’m Vineet — an engineer working at the intersection of AI,
            scalable web systems, and thoughtful product design.
          </p>

          <p className="mt-4 max-w-2xl text-muted">
            I focus on clarity over complexity, clean architecture,
            and building things that are meant to last.
          </p>

          <a
            href="#projects"
            className="
              inline-block mt-10 text-sm font-medium
              border-b border-muted hover:border-foreground transition
            "
          >
            View selected work →
          </a>

        </div>
      </div>
    </section>
  )
}

export default About

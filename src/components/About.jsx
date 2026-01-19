import { useEffect } from "react"

const About = () => {

  useEffect(() => {
    const section = document.getElementById("about")

    const handleMove = (e) => {
      if (!document.documentElement.classList.contains("dark")) return

      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      section.style.setProperty("--mx", `${x}px`)
      section.style.setProperty("--my", `${y}px`)
    }

    section.addEventListener("mousemove", handleMove)
    return () => section.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <section
      id="about"
      className="relative overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none">

        {/* ---------- LIGHT MODE DOT GRID (VISIBLE) ---------- */}
        <div
          className="
            absolute inset-0
            dark:hidden
            bg-[radial-gradient(circle,rgba(0,0,0,0.16)_1.5px,transparent_1.5px)]
            [background-size:22px_22px]
          "
        />

        {/* ---------- LIGHT MODE SOFT PAPER HIGHLIGHT ---------- */}
        <div
          className="
            absolute inset-0
            dark:hidden
            bg-[radial-gradient(260px_circle_at_50%_18%,rgba(0,0,0,0.08),transparent_70%)]
          "
        />

        {/* ---------- LIGHT MODE FADE OUT ---------- */}
        <div
          className="
            absolute inset-0
            dark:hidden
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,white_70%)]
          "
        />

        {/* ---------- DARK MODE DOT GRID (STRONGER) ---------- */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1.5px,transparent_1.5px)]
            [background-size:22px_22px]
            [mask-image:radial-gradient(260px_circle_at_var(--mx)_var(--my),black_0%,transparent_70%)]
            [-webkit-mask-image:radial-gradient(260px_circle_at_var(--mx)_var(--my),black_0%,transparent_70%)]
          "
        />

        {/* ---------- DARK MODE SOFT HALO ---------- */}
        <div
          className="
            absolute inset-0 hidden dark:block
            bg-[radial-gradient(420px_circle_at_var(--mx)_var(--my),rgba(255,255,255,0.06),transparent_70%)]
          "
        />

        {/* ---------- DARK MODE FADE OUT ---------- */}
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

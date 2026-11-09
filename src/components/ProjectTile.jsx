import { motion } from "framer-motion"
import { ArrowUpRight, Trophy } from "./ui/icons"
import { EASE } from "../lib/motion"

export function Badge({ children }) {
  const award = /place|winner/i.test(children)
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${
        award ? "border-accent/30 bg-accent/10 text-accent" : "border-white/10 bg-white/[0.05] text-foreground/80"
      }`}
    >
      {award && <Trophy size={12} />}
      {children}
    </span>
  )
}

/** Clickable bento tile. Opens the project's detail sheet. */
export default function ProjectTile({ project, index, onOpen }) {
  const lg = project.size === "lg"
  const metrics = project.metrics.slice(0, 2) // full set lives in the sheet

  // Feed pointer position to the .spotlight hover effect
  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`)
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onOpen()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`${project.title}. Open details`}
      onClick={onOpen}
      onKeyDown={onKeyDown}
      onPointerMove={onPointerMove}
      className={`
        spotlight group relative h-full cursor-pointer overflow-hidden
        rounded-[28px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm
        p-6 md:p-7 transition duration-500 ease-apple
        hover:-translate-y-1 hover:border-white/[0.16] hover:bg-white/[0.04]
        ${lg ? "min-h-[300px]" : "min-h-[270px]"}
      `}
    >
      {/* Tint glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full opacity-0 transition-opacity duration-700 ease-apple group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent), transparent 68%)" }}
      />

      <div className={`relative flex h-full gap-8 ${lg ? "flex-col lg:flex-row" : "flex-col"}`}>
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[11px] text-muted tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.badge && <Badge>{project.badge}</Badge>}
            </div>
            <span
              className="
                inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                border border-white/10 text-muted transition duration-500 ease-apple
                group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent group-hover:rotate-45
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </div>

          {/* Title */}
          <h3
            className={`mt-5 font-display font-semibold tracking-[-0.03em] leading-[1.05] ${
              lg ? "text-[28px] md:text-[32px]" : "text-xl md:text-[22px]"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

          {/* Bottom: metrics + tech */}
          <div className="mt-auto pt-6">
            {metrics.length > 0 && (
              <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
                {metrics.map((m) => (
                  <div key={m.label} className="flex flex-col-reverse justify-end">
                    <dt className="mt-1 text-[11px] uppercase tracking-wide text-muted">{m.label}</dt>
                    <dd className="font-mono text-lg md:text-xl font-medium tabular-nums text-foreground">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="mt-4 font-mono text-[11px] text-muted/80 truncate">
              {project.tech.join(" · ")}
            </p>
          </div>
        </div>

        {project.visual === "terminal" && <TerminalVisual />}
      </div>
    </div>
  )
}

// Decorative build log for the Docksmith tile.
// Illustrative only: keep it in sync with Docksmith's real CLI output.
const TERMINAL_LINES = [
  { t: "$ docksmith build -t api .", c: "text-foreground" },
  { t: "Step 1/4  FROM python:3.12      ✓ cached", c: "text-muted" },
  { t: "Step 2/4  WORKDIR /app          ✓ cached", c: "text-muted" },
  { t: "Step 3/4  COPY . .              ✓ cached", c: "text-muted" },
  { t: "Step 4/4  RUN pip install -r …  ● build", c: "text-accent" },
  { t: "→ layer sha256:9f2c…e41a", c: "text-foreground/80" },
  { t: "$ docksmith run api", c: "text-foreground" },
]

function TerminalVisual() {
  return (
    <div
      aria-hidden="true"
      className="hidden sm:flex w-full lg:w-[48%] shrink-0 flex-col self-stretch overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40"
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-[10px] text-muted">zsh, docksmith</span>
      </div>
      <motion.div
        className="flex-1 space-y-1.5 px-4 py-4 font-mono text-[11px] leading-relaxed"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } } }}
      >
        {TERMINAL_LINES.map((line) => (
          <motion.p
            key={line.t}
            className={`whitespace-pre overflow-hidden text-ellipsis ${line.c}`}
            variants={{
              hidden: { opacity: 0, x: -6 },
              show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
            }}
          >
            {line.t}
          </motion.p>
        ))}
        <motion.span
          className="inline-block h-3.5 w-1.5 translate-y-0.5 bg-accent"
          variants={{ hidden: { opacity: 0 }, show: { opacity: [0, 1, 0] } }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}

import { useRef } from "react"
import { motion } from "framer-motion"

import useModal from "../hooks/useModal"
import Pill from "./ui/Pill"
import { Eyebrow } from "./ui/SectionHeader"
import { ArrowUpRight, Close } from "./ui/icons"
import { Badge } from "./ProjectTile"
import { linkLabels } from "../data/projects"
import { EASE } from "../lib/motion"

/** Full project details. Bottom sheet on mobile, centred card on desktop. */
export default function ProjectSheet({ project, index, onClose }) {
  const panelRef = useRef(null)
  useModal(panelRef, onClose)

  const titleId = `sheet-title-${project.id}`
  const links = Object.entries(project.links).filter(([, url]) => url)

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center md:items-center md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} aria-hidden="true" />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ y: 80, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="
          relative w-full max-w-3xl max-h-[92svh] overflow-y-auto overflow-x-hidden overscroll-contain
          rounded-t-[28px] md:rounded-[28px] border border-white/10
          bg-surface/95 backdrop-blur-2xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]
        "
      >
        {/* Tint glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[120%] -translate-x-1/2"
          style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 12%, transparent), transparent)" }}
        />

        {/* Grab handle (mobile) */}
        <div className="relative flex justify-center pt-3 md:hidden" aria-hidden="true">
          <span className="h-1 w-10 rounded-full bg-white/20" />
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-muted hover:text-foreground transition"
        >
          <Close size={16} />
        </button>

        <div className="relative px-7 pb-10 pt-6 md:px-12 md:pb-12 md:pt-12">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[11px] text-muted tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            {project.badge && <Badge>{project.badge}</Badge>}
          </div>

          <h2
            id={titleId}
            className="mt-5 pr-10 font-display text-3xl md:text-[40px] font-semibold tracking-[-0.035em] leading-[1.03]"
          >
            {project.title}
          </h2>
          <p className="mt-3 text-lg text-accent">{project.tagline}</p>

          <p className="mt-5 text-base leading-relaxed text-foreground/80">{project.description}</p>

          {project.metrics.length > 0 && (
            <dl
              className={`mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] ${
                ["grid-cols-1", "grid-cols-2", "grid-cols-3"][Math.min(project.metrics.length, 3) - 1]
              }`}
            >
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse justify-end bg-surface px-4 py-5 md:px-5">
                  <dt className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-wide text-muted [overflow-wrap:anywhere]">{m.label}</dt>
                  <dd className="font-mono text-xl md:text-2xl font-medium tabular-nums">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-10">
            <Eyebrow>Highlights</Eyebrow>
            <ul className="mt-4 space-y-3">
              {project.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Eyebrow>Built with</Eyebrow>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[13px] text-foreground/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {links.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-3">
              {links.map(([kind, url], i) => (
                <Pill key={kind} href={url} variant={i === 0 ? "solid" : "outline"}>
                  {linkLabels[kind]} <ArrowUpRight size={14} />
                </Pill>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

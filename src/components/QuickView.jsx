import { useRef } from "react"
import { motion } from "framer-motion"

import useModal from "../hooks/useModal"
import Pill from "./ui/Pill"
import { Bolt, Close } from "./ui/icons"
import { education, profile } from "../data/profile"
import { leadership, nowBuilding, work } from "../data/experience"
import { linkLabels, projects } from "../data/projects"
import { skillGroups } from "../data/skills"
import { EASE } from "../lib/motion"

/**
 * One-screen résumé for people who skim. Built entirely from the same
 * data files as the main site, so it never goes out of date.
 */
export default function QuickView({ onClose }) {
  const panelRef = useRef(null)
  useModal(panelRef, onClose)
  const { links } = profile

  return (
    <motion.div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-background/85 backdrop-blur-2xl"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 12, opacity: 0 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
        className="mx-auto max-w-3xl px-6 pb-20 pt-6 md:pt-10"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            <Bolt size={13} /> Quick view
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quick view"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-muted transition hover:text-foreground"
          >
            <Close size={18} />
          </button>
        </div>

        {/* Identity */}
        <h2
          id="quickview-title"
          className="mt-8 font-display text-3xl md:text-4xl font-semibold tracking-[-0.04em]"
        >
          {profile.name}
        </h2>
        <p className="mt-2 text-muted">
          {education[0].detail}, {education[0].school.split(",")[0]} ’27 · {education[0].note} ·{" "}
          {profile.location}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill href={`mailto:${profile.email}`} variant="solid">
            Email
          </Pill>
          <Pill href={links.resume}>Résumé PDF</Pill>
          {links.github && <Pill href={links.github}>GitHub</Pill>}
          {links.linkedin && <Pill href={links.linkedin}>LinkedIn</Pill>}
        </div>

        <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          <Row label="Now">
            <Line title={`${nowBuilding.role}, ${nowBuilding.org}`} meta={nowBuilding.range} note="Early-stage, in stealth" />
          </Row>

          <Row label="Experience">
            {work.map((w) => (
              <Line key={w.org} title={`${w.role}, ${w.org}`} meta={w.range} note={w.summary} />
            ))}
          </Row>

          <Row label="Leadership">
            {leadership.map((l) => (
              <Line
                key={l.org}
                title={`${l.role}, ${l.org}`}
                meta={l.range}
                note={`${l.highlight.value} ${l.highlight.label}`}
              />
            ))}
          </Row>

          <Row label="Projects">
            {projects.map((p) => {
              const projectLinks = Object.entries(p.links).filter(([, url]) => url)
              return (
                <div key={p.id} className="py-2 first:pt-0 last:pb-0">
                  <p className="text-[15px]">
                    <span className="font-medium">{p.title}</span>
                    {p.badge && <span className="text-accent"> · {p.badge}</span>}
                  </p>
                  <p className="text-sm text-muted">{p.tagline}</p>
                  {projectLinks.length > 0 && (
                    <p className="mt-1 flex gap-3 text-sm">
                      {projectLinks.map(([kind, url]) => (
                        <a
                          key={kind}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          {linkLabels[kind]} ↗
                        </a>
                      ))}
                    </p>
                  )}
                </div>
              )
            })}
          </Row>

          <Row label="Skills">
            {skillGroups.map((g) => (
              <p key={g.label} className="py-1 text-sm first:pt-0 last:pb-0">
                <span className="text-foreground">{g.label}:</span>{" "}
                <span className="text-muted">{g.items.join(", ")}</span>
              </p>
            ))}
          </Row>

          <Row label="Education">
            {education.map((e) => (
              <Line key={e.school} title={e.school} meta={e.range} note={e.detail} />
            ))}
          </Row>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Row({ label, children }) {
  return (
    <section className="grid gap-3 py-6 md:grid-cols-[130px_1fr] md:gap-8">
      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted md:pt-1">{label}</h3>
      <div>{children}</div>
    </section>
  )
}

function Line({ title, meta, note }) {
  return (
    <div className="py-2 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="text-[15px] font-medium">{title}</p>
        <p className="font-mono text-[11px] text-muted tabular-nums">{meta}</p>
      </div>
      {note && <p className="mt-0.5 text-sm text-muted leading-relaxed">{note}</p>}
    </div>
  )
}

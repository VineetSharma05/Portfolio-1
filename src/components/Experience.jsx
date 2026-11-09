import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

import SectionHeader, { Eyebrow } from "./ui/SectionHeader"
import Reveal from "./ui/Reveal"
import { leadership, nowBuilding, work } from "../data/experience"

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Track record"
          title="Where I’ve worked."
          sub="Industry engineering, research, and building communities from the ground up."
        />

        {/* NOW BUILDING */}
        <Reveal className="mt-10">
          <div className="flex flex-col gap-3 rounded-2xl border border-accent/20 bg-accent/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <p className="text-[15px]">
                <span className="font-medium">Now building: {nowBuilding.org}</span>
                <span className="text-muted"> · {nowBuilding.note}</span>
              </p>
            </div>
            <span className="pl-5 sm:pl-0 font-mono text-xs text-muted whitespace-nowrap">{nowBuilding.range}</span>
          </div>
        </Reveal>

        <Timeline />

        {/* LEADERSHIP */}
        <Reveal className="mt-20">
          <Eyebrow>Leadership</Eyebrow>
          <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold tracking-[-0.03em]">
            Beyond the code.
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          {leadership.map((item, i) => (
            <Reveal key={item.org} delay={i * 0.07} className="h-full">
              <article className="flex h-full flex-col rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm">
                <p className="font-display text-4xl font-semibold tracking-[-0.04em]">
                  {item.highlight.value}
                </p>
                <p className="mt-1 text-sm text-muted">{item.highlight.label}</p>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <h4 className="font-display text-lg font-semibold tracking-tight">{item.role}</h4>
                  <p className="mt-0.5 text-sm text-muted">{item.org}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{item.point}</p>
                </div>
                <p className="mt-auto pt-6 font-mono text-[11px] text-muted">{item.range}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Vertical timeline whose line fills with the accent as you scroll through it. */
function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <div ref={ref} className="relative mt-12">
      {/* Track + fill. Mobile: left edge. Desktop: between date and content columns. */}
      <div className="absolute bottom-2 top-2 left-[4px] md:left-[200px] w-px bg-white/[0.08]" aria-hidden="true">
        <motion.div
          style={{ scaleY: fill }}
          className="h-full w-full origin-top bg-gradient-to-b from-accent to-accent/30"
        />
      </div>

      {work.map((item, i) => (
        <Reveal
          key={item.org}
          delay={i * 0.05}
          className="relative grid gap-3 pb-12 last:pb-0 pl-8 md:pl-0 md:grid-cols-[176px_1fr] md:gap-12"
        >
          {/* Node */}
          <span
            aria-hidden="true"
            className="absolute top-[7px] left-0 md:left-[196px] h-[9px] w-[9px] rounded-full border border-accent bg-background node-glow"
          />

          <p className="font-mono text-xs text-muted tabular-nums md:pt-1.5 md:text-right">{item.range}</p>

          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold tracking-[-0.03em]">
              {item.role}
            </h3>
            <p className="mt-1 text-[15px] text-accent">{item.org}</p>

            <ul className="mt-5 space-y-3 max-w-3xl">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-foreground/75">
                  <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  {point}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

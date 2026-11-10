import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import Reveal from "../components/ui/Reveal"
import Pill from "../components/ui/Pill"
import { Eyebrow } from "../components/ui/SectionHeader"
import { ArrowRight, Bolt } from "../components/ui/icons"
import { education } from "../data/profile"
import { EASE } from "../lib/motion"

const principles = [
  {
    title: "Ship it.",
    body: "Most of my best work has shipped inside a 24 or 36-hour hackathon window. A deadline forces you to find what actually matters.",
  },
  {
    title: "Clarity first.",
    body: "In code, communication and design. Clean architecture over clever shortcuts, because someone has to maintain it next month.",
  },
  {
    title: "Build the team.",
    body: "Growing NEXUS from 20 to 200+ taught me that the best systems are people. Thirty-two student leads now run what started as one idea.",
  },
]

const enter = (delay) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, ease: EASE, delay },
})

const AboutPage = ({ onQuickView }) => {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36">
      {/* INTRO */}
      <motion.div {...enter(0)}>
        <Eyebrow>The story</Eyebrow>
      </motion.div>
      <motion.h1
        {...enter(0.06)}
        className="mt-4 max-w-4xl font-display text-4xl md:text-[56px] font-semibold tracking-[-0.04em] leading-[1.02]"
      >
        Two worlds, <span className="text-gradient">one lesson.</span>
      </motion.h1>

      <motion.p
        {...enter(0.14)}
        className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/80"
      >
        I’m a Computer Science student at PES University who spent the last two
        years in two very different worlds: training models that need to work
        in the real world, and leading a community that grew ten times over.
        Both taught me the same thing. The hard part was never the idea.{" "}
        <span className="text-foreground">It’s shipping something people actually rely on.</span>
      </motion.p>

      {/* PRINCIPLES */}
      <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-5">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07} className="h-full">
            <div className="h-full rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm">
              <p className="font-mono text-[11px] text-accent tabular-nums">0{i + 1}</p>
              <h2 className="mt-4 font-display text-xl font-semibold tracking-[-0.03em]">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* BEYOND + EDUCATION */}
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <Reveal>
          <Eyebrow>Off the clock</Eyebrow>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Cars, sports, and whatever new tech just dropped. I’ll happily talk
            about any of the three for an hour. On a team I like to collaborate,
            learn fast, and lead when it counts.
          </p>
        </Reveal>

        <Reveal delay={0.07}>
          <Eyebrow>Education</Eyebrow>
          <ul className="mt-5 divide-y divide-white/[0.08]">
            {education.map((item) => (
              <li key={item.school} className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1 py-4 first:pt-0">
                <div>
                  <p className="font-medium">{item.school}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-muted tabular-nums">{item.range}</p>
                  {item.note && <p className="mt-1 font-mono text-xs text-accent">{item.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* NEXT */}
      <Reveal className="mt-16 flex flex-wrap gap-3">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition duration-300 ease-apple hover:bg-white hover:scale-[1.02]"
        >
          See my work <ArrowRight size={15} />
        </Link>
        <Pill onClick={onQuickView}>
          <Bolt size={14} className="text-accent" /> Quick view
        </Pill>
      </Reveal>
    </div>
  )
}

export default AboutPage

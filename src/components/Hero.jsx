import { motion } from "framer-motion"
import Pill from "./ui/Pill"
import HeroBackdrop from "./HeroBackdrop"
import { ArrowRight } from "./ui/icons"
import { profile } from "../data/profile"
import { nowBuilding, work } from "../data/experience"
import { EASE } from "../lib/motion"

// Soft "focus pull" entrance, staggered
const enter = (delay) => ({
  initial: { opacity: 0, y: 26, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, ease: EASE, delay },
})

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[88svh] items-center">
      <HeroBackdrop />
      <div className="mx-auto w-full max-w-6xl px-6 pt-28 pb-16">
        {/* STATUS CHIP */}
        <motion.div
          {...enter(0)}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-[12px] font-medium text-foreground/85">
            Open to opportunities · {profile.location}
          </span>
        </motion.div>

        {/* HEADLINE */}
        <h1 className="mt-7 font-display font-semibold tracking-[-0.04em] leading-[1] text-[40px] sm:text-5xl md:text-6xl xl:text-[68px]">
          <motion.span {...enter(0.08)} className="block">
            {profile.name}.
          </motion.span>
          <motion.span {...enter(0.18)} className="block text-gradient pb-2">
            I build AI and systems that ship.
          </motion.span>
        </h1>

        {/* SUPPORTING LINE */}
        <motion.p
          {...enter(0.3)}
          className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted"
        >
          Computer Science at PES University. Software engineering at Fiserv,
          multimodal AI research at CDSAML, and two national hackathon wins
          along the way.
        </motion.p>

        {/* CTAs */}
        <motion.div {...enter(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
          <Pill href="#work" variant="solid">
            See my work <ArrowRight size={15} />
          </Pill>
          <Pill href={profile.links.resume}>Résumé</Pill>
        </motion.div>

        {/* CURRENTLY */}
        <motion.dl
          {...enter(0.5)}
          className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06]"
        >
          <div className="bg-background/60 px-5 py-4 backdrop-blur-md">
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Now</dt>
            <dd className="mt-1.5 text-sm">
              {nowBuilding.role}, {nowBuilding.org}
            </dd>
          </div>
          <div className="bg-background/60 px-5 py-4 backdrop-blur-md">
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Previously</dt>
            <dd className="mt-1.5 text-sm">SWE Intern, {work[0].org.replace(" Global Services", "")}</dd>
          </div>
        </motion.dl>
      </div>

    </section>
  )
}

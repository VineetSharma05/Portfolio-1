import { useState } from "react"
import { AnimatePresence } from "framer-motion"

import SectionHeader from "./ui/SectionHeader"
import Reveal from "./ui/Reveal"
import ProjectTile from "./ProjectTile"
import ProjectSheet from "./ProjectSheet"
import { projects } from "../data/projects"

// Bento spans: 6 columns on desktop, 2 on tablet, 1 on mobile
const spanClass = (p) => {
  if (p.size === "lg") return "sm:col-span-2 lg:col-span-4"
  if (p.wideOnTablet) return "sm:col-span-2 lg:col-span-2"
  return "lg:col-span-2"
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null)
  const open = openIndex === null ? null : projects[openIndex]

  return (
    <section id="work" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Things I’ve built."
          sub="Eight projects across AI, distributed systems and product. Open any of them for the full story."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6 md:gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.07} className={spanClass(p)}>
              <ProjectTile project={p} index={i} onOpen={() => setOpenIndex(i)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <ProjectSheet
            key={open.id}
            project={open}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

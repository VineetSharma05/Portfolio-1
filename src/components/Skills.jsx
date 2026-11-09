import SectionHeader, { Eyebrow } from "./ui/SectionHeader"
import Reveal from "./ui/Reveal"
import { skillGroups } from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Toolbox" title="What I work with." />

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={(i % 2) * 0.07} className="h-full">
              <div className="h-full rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm">
                <Eyebrow className="!text-muted">{group.label}</Eyebrow>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/[0.07] bg-white/[0.04] px-3.5 py-1.5 text-sm text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

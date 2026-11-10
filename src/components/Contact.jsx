import { useEffect, useRef, useState } from "react"

import Reveal from "./ui/Reveal"
import Pill from "./ui/Pill"
import { Eyebrow } from "./ui/SectionHeader"
import { ArrowUpRight, Check, Copy } from "./ui/icons"
import { profile } from "../data/profile"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const { links } = profile

  return (
    <section id="contact" className="scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-surface/60 px-7 py-14 text-center md:px-16 md:py-20">
            {/* Card's own aurora */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 -top-1/2 h-[120%] w-[90%] -translate-x-1/2 rounded-full"
              style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 13%, transparent), transparent)" }}
            />

            <div className="relative">
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl md:text-[56px] font-semibold tracking-[-0.04em] leading-[0.98]">
                Let’s build <span className="text-gradient">something.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base md:text-[17px] text-muted leading-relaxed">
                A role, a project, or a conversation about AI, systems or the
                next hackathon. My inbox is open.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Pill href={`mailto:${profile.email}`} variant="solid">
                  Email me
                </Pill>
                <Pill onClick={copyEmail} aria-live="polite">
                  {copied ? (
                    <>
                      <Check size={15} className="text-accent" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={15} /> {profile.email}
                    </>
                  )}
                </Pill>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-1">
                {[
                  ["Résumé", links.resume],
                  ["GitHub", links.github],
                  ["LinkedIn", links.linkedin],
                ]
                  .filter(([, url]) => url)
                  .map(([label, url]) => (
                    <Pill key={label} href={url} variant="ghost">
                      {label} <ArrowUpRight size={13} />
                    </Pill>
                  ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

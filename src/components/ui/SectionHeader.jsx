import Reveal from "./Reveal"

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`font-mono text-[11px] tracking-[0.22em] uppercase text-accent ${className}`}>
      {children}
    </p>
  )
}

export default function SectionHeader({ eyebrow, title, sub }) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-3xl md:text-[44px] font-semibold tracking-[-0.03em] leading-[1.05]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base md:text-[17px] text-muted leading-relaxed max-w-2xl">{sub}</p>}
    </Reveal>
  )
}

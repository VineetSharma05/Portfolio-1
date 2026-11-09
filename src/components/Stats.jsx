import Reveal from "./ui/Reveal"
import CountUp from "./ui/CountUp"
import { stats } from "../data/profile"

export default function Stats() {
  return (
    <section aria-label="By the numbers" className="py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <dl className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/[0.08]">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`
                  flex flex-col-reverse justify-end gap-3
                  py-6 md:py-8 px-1 md:px-6
                  ${i % 2 === 1 ? "pl-5 md:pl-6 border-l border-white/[0.08]" : ""}
                  ${i >= 2 ? "border-t lg:border-t-0 border-white/[0.08]" : ""}
                  ${i === 2 ? "lg:border-l" : ""}
                  ${i === 0 ? "lg:pl-0" : ""}
                `}
              >
                <dt className="text-sm text-muted leading-snug max-w-[16ch]">{s.label}</dt>
                <dd className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.04em]">
                  <CountUp to={s.to} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

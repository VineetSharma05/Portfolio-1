/**
 * iOS-style switch for the site accent: off = purple (default), on = teal.
 * The track fills with the current accent, which fades with the switch.
 */
export default function MoodToggle({ mood, onToggle, showLabel = false }) {
  const on = mood === "teal"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={`Accent colour: ${on ? "teal" : "purple"}. Switch to ${on ? "purple" : "teal"}`}
      title="Switch accent colour"
      onClick={onToggle}
      className="group inline-flex items-center gap-2.5 rounded-full"
    >
      {showLabel && (
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted group-hover:text-foreground transition">
          Glow
        </span>
      )}

      <span className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-white/10 bg-white/[0.06] overflow-hidden">
        {/* Accent fill */}
        <span className="absolute inset-0 rounded-full bg-accent/75" />

        {/* Knob */}
        <span
          className={`
            relative h-5 w-5 rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.35)]
            transition-transform duration-500 ease-apple
            ${on ? "translate-x-[24px]" : "translate-x-[3px]"}
          `}
        />
      </span>
    </button>
  )
}

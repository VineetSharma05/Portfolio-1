import { motion } from "framer-motion"

const achievements = [
  {
    title: "1st Place — Terrathon 4.0",
    subtitle: "CISCO Problem Statement",
    description:
      "Won with “Saarthi,” an end-to-end AI platform for smart farming covering disease detection, crop recommendation, price prediction, and irrigation.",
  },
  {
    title: "Winner — Smart India Hackathon Junior 2023",
    subtitle: "National-level competition",
    description:
      "Built “SAV4SECURE,” a cross-platform automation system for safety and tracking, competing against teams nationwide.",
  },
]

const TrophyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold shrink-0">
    <path
      d="M7 4h10v3a5 5 0 0 1-10 0V4Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M7 5H4a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3M17 5h3a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M12 12v4M9 20h6M10 16h4v2a2 2 0 0 1-.9 1.7l-.1.1a1 1 0 0 0-.5.9V20h-2v-1.3a1 1 0 0 0-.5-.9l-.1-.1a2 2 0 0 1-.9-1.7v-2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
)

const Achievements = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="
                rounded-2xl border border-glassBorder bg-glass backdrop-blur-xl
                px-6 py-6 md:px-8 md:py-7
              "
            >
              <div className="flex items-start gap-3">
                <TrophyIcon />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-muted uppercase tracking-wide">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

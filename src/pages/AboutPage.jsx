import { motion } from "framer-motion"

const education = [
  {
    school: "PES University, Bengaluru",
    detail: "B.Tech, Computer Science & Engineering",
    range: "2023 — 2027",
    note: "CGPA 8.29",
  },
  {
    school: "AECS Maaruti Magnolia Public School",
    detail: "CBSE — Class XII (91%) · Class X (89%)",
    range: "2016 — 2023",
  },
]

const AboutPage = () => {
  return (
    <section className="min-h-screen pt-32 md:pt-40 px-6 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* ================= INTRO ================= */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-accent"
        >
          The story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
        >
          About Vineet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 max-w-3xl text-lg text-muted leading-relaxed"
        >
          I’m a Computer Science student at PES University who ended up spending
          most of the last two years in two very different worlds — training
          models that need to work in the real world, and leading a community
          that grew ten times over on my watch. Both taught me the same lesson:
          the hard part was never the idea. It’s shipping something people
          actually rely on.
        </motion.p>

        {/* ================= SPLIT SECTION ================= */}
        <div className="mt-20 grid md:grid-cols-2 gap-16">

          {/* ---------- TECHNICAL ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-mono text-xs uppercase tracking-wide text-muted">
              Technical work
            </h2>

            <ul className="mt-6 space-y-4 text-muted">
              <li>
                <span className="text-accent mr-2">—</span>
                Shipping AI/ML systems aimed at real-world impact — smart
                agriculture, health tech, financial coaching, and stress-aware
                music generation.
              </li>
              <li>
                <span className="text-accent mr-2">—</span>
                Full-stack development with React, Flask, and REST APIs,
                with an eye for clean architecture over clever shortcuts.
              </li>
              <li>
                <span className="text-accent mr-2">—</span>
                Deep in computer vision, NLP, and distributed systems — from
                fine-tuning BERT to running Kafka across a 4-node network.
              </li>
              <li>
                <span className="text-accent mr-2">—</span>
                Comfortable under a ticking clock: most of my best work has
                shipped inside a 24 or 36-hour hackathon window.
              </li>
            </ul>
          </motion.div>

          {/* ---------- NON-TECH / LEADERSHIP ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h2 className="font-mono text-xs uppercase tracking-wide text-muted">
              Leadership & beyond code
            </h2>

            <ul className="mt-6 space-y-4 text-muted">
              <li>
                <span className="text-accent mr-2">—</span>
                Grew NEXUS Technical Club from 20 to 200+ members as Club Head,
                and founded a peer-teaching program now run by 32 student leads.
              </li>
              <li>
                <span className="text-accent mr-2">—</span>
                Led marketing for university-scale events, including a campaign
                that brought 8,000+ national participants to campus.
              </li>
              <li>
                <span className="text-accent mr-2">—</span>
                Coordinated brand and outreach for Physics Wallah’s first
                Bangalore launch event — 1,000+ people, one shot to get it right.
              </li>
              <li>
                <span className="text-accent mr-2">—</span>
                Outside of all that: cars, sports, and whatever new tech just
                dropped. I’ll happily talk about any of the three for an hour.
              </li>
            </ul>
          </motion.div>

        </div>

        {/* ================= EDUCATION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <h2 className="font-mono text-xs uppercase tracking-wide text-muted">
            Education
          </h2>

          <div className="mt-6">
            {education.map((item) => (
              <div
                key={item.school}
                className="
                  grid grid-cols-1 md:grid-cols-[1fr_auto] gap-1 md:gap-6
                  py-5 border-t border-glassBorder first:border-t-0
                "
              >
                <div>
                  <p className="font-medium">{item.school}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
                <div className="flex md:flex-col md:items-end gap-2 md:gap-1 justify-between md:justify-start">
                  <p className="font-mono text-xs text-muted tabular-nums">{item.range}</p>
                  {item.note && (
                    <p className="font-mono text-xs text-accent tabular-nums">{item.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= CLOSING ================= */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-24 max-w-3xl text-muted leading-relaxed"
        >
          I care deeply about clarity — in code, communication, and design.
          Whether I’m training a model or leading a team, my focus is on
          building things that last and solving problems that actually matter.
        </motion.p>

      </div>
    </section>
  )
}

export default AboutPage

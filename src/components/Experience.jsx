import { motion } from "framer-motion"

const experience = [
  {
    role: "Founder",
    org: "Trailo",
    range: "Aug ’26 — Present",
    current: true,
    points: [
      "Early-stage build — details coming soon.",
    ],
    tags: ["Building", "Stealth"],
  },
  {
    role: "Founder",
    org: "CUE",
    range: "Aug ’26 — Present",
    current: true,
    points: [
      "Early-stage build — details coming soon.",
    ],
    tags: ["Building", "Stealth"],
  },
  {
    role: "Software Engineering Intern",
    org: "Fiserv Global Services",
    range: "Jun ’26 — Aug ’26",
    points: [
      "Built a Flask-based release intelligence platform integrating Confluence REST APIs with BeautifulSoup parsing, replacing hours of manual RC-table analysis with automated, team-level signoff dashboards.",
      "Architected a real-time source-freshness detection system using Confluence version-metadata diffing, 60-second polling, and browser Visibility/Focus APIs, backed by a thread-safe session store with auto-expiry.",
    ],
    tags: ["Flask", "Confluence REST API", "Python", "JavaScript"],
  },
  {
    role: "Research Intern & Lead Developer",
    org: "CDSAML, PES University",
    range: "Jun ’25 — Aug ’25",
    points: [
      "Architected a 3-modality emotion recognition system — BERT-Transformer (text, 94% val. accuracy), CNN-BiLSTM (audio), custom CNN (video, 82% val. accuracy) — fused via a novel Hierarchical Fusion with Adaptive Certainty Weighting mechanism.",
      "Engineered a real-time, stress-adaptive music therapy pipeline with sub-10s end-to-end latency on CPU-only hardware; co-authored a manuscript submitted to IEEE.",
    ],
    tags: ["PyTorch", "Hugging Face", "BERT", "MusicGen"],
  },
  {
    role: "Club Head",
    org: "NEXUS Technical Club, PES University",
    range: "Jan ’24 — Aug ’26",
    points: [
      "Grew the community 10x (20 → 200+ members) through data-driven outreach and a 32-member core leadership team.",
      "Founded NEXUS Community, a peer-teaching program across AI/ML, Web Tech, and Cybersecurity that upskilled 200+ students — a first-of-its-kind initiative among PES tech clubs.",
    ],
    tags: ["Leadership", "Community Building", "Mentorship"],
  },
  {
    role: "Head of Marketing",
    org: "PES The Amateur Manager and Scientists",
    range: "Mar ’24 — Sep ’24",
    points: [
      "Designed a phased, city-wise segmented outreach campaign that attracted 8,000+ national participants to one of PES University's largest tech-business events.",
    ],
    tags: ["Marketing", "Growth Strategy"],
  },
  {
    role: "Marketing Head — Launch Event “Aagaaz”",
    org: "Physics Wallah",
    range: "Feb ’24 — Mar ’24",
    points: [
      "Coordinated with branding and outreach teams to drive 1,000+ offline attendees at Physics Wallah's first Bangalore event.",
    ],
    tags: ["Event Marketing", "Brand Coordination"],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="pt-8 pb-8 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
              Track record
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Experience
            </h2>
          </div>
        </motion.div>

        <div className="mt-14 md:mt-16">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="
                grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10
                py-8 border-t border-glassBorder
                first:border-t-0 md:first:pt-0
              "
            >
              {/* DATE / STATUS COLUMN */}
              <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-2">
                <p className="font-mono text-xs text-muted tabular-nums whitespace-nowrap">
                  {item.range}
                </p>
                {item.current && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Ongoing
                  </span>
                )}
              </div>

              {/* CONTENT COLUMN */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.org}</p>

                <ul className="mt-5 space-y-3 text-muted">
                  {item.points.map((point, j) => (
                    <li key={j} className="leading-relaxed">
                      <span className="text-accent mr-2">—</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        font-mono text-[11px] px-2.5 py-1 rounded-md
                        bg-glass border border-glassBorder text-muted
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience

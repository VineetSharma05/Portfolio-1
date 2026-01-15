import { motion } from "framer-motion"

const projects = [
  {
    title: "AI-Powered Smart Agriculture",
    tagline: "Reimagining farming with intelligence.",
    description:
      "An end-to-end intelligent system assisting farmers with crop selection, disease detection, irrigation, and price prediction using machine learning.",
    points: [
      "ML-driven crop & fertilizer recommendations",
      "Plant disease & weed detection using computer vision",
      "Smart irrigation and yield prediction from real data",
    ],
    tech: "Python · ML · Computer Vision · React · APIs",
    link: "#",
  },
  {
    title: "Legal Workflow Generator",
    tagline: "Turning law into execution.",
    description:
      "A system that converts complex Indian legal and compliance requirements into actionable, founder-friendly workflows.",
    points: [
      "Mapped DPDP Act, Companies Act, and employment laws",
      "Workflow-first compliance instead of static documents",
      "Built for non-legal founders and startups",
    ],
    tech: "LLMs · NLP · Legal Data · React",
    link: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="pt-40 space-y-40">
      {projects.map((project, index) => (
        <div
          key={index}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* LEFT — STICKY TITLE */}
          <div className="md:sticky md:top-40 h-fit">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              {project.title}
            </h2>

            <p className="mt-4 text-lg text-muted">
              {project.tagline}
            </p>

            <a
              href={project.link}
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-muted hover:text-foreground transition"
            >
              View case study →
            </a>
          </div>

          {/* RIGHT — SCROLLING CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-lg text-muted">
              {project.description}
            </p>

            <ul className="space-y-3 text-muted">
              {project.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <p className="text-sm text-muted">
              {project.tech}
            </p>
          </motion.div>
        </div>
      ))}
    </section>
  )
}

export default Projects

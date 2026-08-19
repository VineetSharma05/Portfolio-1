import { motion } from "framer-motion"

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    label: "Core CS & Systems",
    items: ["Data Structures & Algorithms", "Distributed Systems", "Multi-threading", "System Design", "OOP"],
  },
  {
    label: "AI / ML & LLM",
    items: [
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "Scikit-learn",
      "XGBoost",
      "BERT Transformers",
      "RAG",
      "Agentic AI",
      "LangChain",
      "FAISS",
      "Prompt Engineering",
    ],
  },
  {
    label: "Computer Vision",
    items: ["ResNet", "InceptionV3", "CNN-BiLSTM", "OpenCV"],
  },
  {
    label: "Backend & Systems",
    items: ["Flask", "FastAPI", "Node.js", "REST APIs", "MERN Stack", "Apache Kafka", "Docker", "Confluence REST API"],
  },
  {
    label: "Data & Cloud",
    items: ["MySQL", "SQL Server", "AWS S3", "Pandas", "NumPy", "Power BI", "Tableau", "Git", "JIRA"],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="pt-8 pb-8 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
            Toolbox
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Skills
          </h2>
        </motion.div>

        <div className="mt-12 space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10"
            >
              <p className="font-mono text-xs text-muted uppercase tracking-wide pt-1">
                {group.label}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="
                      text-sm px-3 py-1.5 rounded-lg
                      bg-glass border border-glassBorder
                      hover:border-accent hover:text-accent transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills

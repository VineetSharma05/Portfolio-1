import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
            Get in touch
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            Let’s talk
          </h2>

          <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Open to opportunities, collaborations & interesting problems
          </div>

          <p className="mt-8 text-lg text-muted">
            Whether it’s a role, a project, or just a conversation about
            AI, systems, or the next hackathon — my inbox is open.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:vineetsharma2205@gmail.com"
              className="px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
            >
              Email me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-glassBorder text-sm font-medium hover:border-accent hover:text-accent transition"
            >
              View résumé
            </a>

            <a
              href="https://github.com/VineetSharma05"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-glassBorder text-sm font-medium hover:border-accent hover:text-accent transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vineet-sharma-5a9320312/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-glassBorder text-sm font-medium hover:border-accent hover:text-accent transition"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-10 font-mono text-xs text-muted">
            vineetsharma2205@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

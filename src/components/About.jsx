import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
          >
            I design and build systems <br />
            that solve real problems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-8 text-xl text-muted max-w-3xl"
          >
            I’m Vineet — an engineer working at the intersection of AI, scalable
            web systems, and thoughtful product design.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-4 text-lg text-muted max-w-3xl"
          >
            I focus on clarity over complexity, clean architecture, and building
            things that are meant to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition"
            >
              View selected work →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About

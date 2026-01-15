import { motion } from "framer-motion"
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 pt-32">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
        >
          Building thoughtful <br />
          digital experiences.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-muted"
        >
          I’m Vineet — an engineer focused on building clean, scalable, and
          impactful systems across AI, web, and real-world problem spaces.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex gap-6"
        >
          <motion.a
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            href="#projects"
            className="px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium"
          >
            View Work
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            href="#contact"
            className="px-6 py-3 rounded-xl border border-glassBorder text-sm font-medium text-foreground"
          >
            Get in touch
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero

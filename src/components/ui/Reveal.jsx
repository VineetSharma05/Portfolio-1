import { motion } from "framer-motion"
import { EASE } from "../../lib/motion"

/** Fade-and-rise when scrolled into view. Plays once. */
export default function Reveal({ children, delay = 0, y = 24, className = "", ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import About from "../components/About"
import SectionDivider from "../components/SectionDivider"
import Experience from "../components/Experience"
import Achievements from "../components/Achievements"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"

const Home = () => {
  const location = useLocation()

  // Smooth-scroll to a section when arriving with a hash (from any page)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        // wait a tick so layout is settled before measuring position
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        })
      }
    }
  }, [location])

  return (
    <>
      <About />          {/* Hero */}
      <SectionDivider />
      <Experience />
      <Achievements />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <Contact />
    </>
  )
}

export default Home

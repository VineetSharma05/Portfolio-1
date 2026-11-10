import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
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
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  )
}

export default Home

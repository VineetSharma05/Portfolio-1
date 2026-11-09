import { useCallback, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence, MotionConfig } from "framer-motion"

import Aurora from "./components/Aurora"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import QuickView from "./components/QuickView"
import ScrollManager from "./components/ScrollManager"

import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import NotFound from "./pages/NotFound"

function App() {
  const [quickView, setQuickView] = useState(false)
  const openQuickView = useCallback(() => setQuickView(true), [])
  const closeQuickView = useCallback(() => setQuickView(false), [])

  return (
    <MotionConfig reducedMotion="user">
      <Aurora />
      <ScrollManager />

      <Navbar onQuickView={openQuickView} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage onQuickView={openQuickView} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <AnimatePresence>
        {quickView && <QuickView onClose={closeQuickView} />}
      </AnimatePresence>
    </MotionConfig>
  )
}

export default App

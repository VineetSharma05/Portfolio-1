import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Socials from "./components/Socials"
import ScrollManager from "./components/ScrollManager"

import Home from "./pages/Home"
import AboutPage from "./pages/AboutPage"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      {/* Keeps scroll position sane across route/hash changes */}
      <ScrollManager />

      {/* Persistent */}
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Persistent */}
      <Socials />
    </>
  )
}

export default App

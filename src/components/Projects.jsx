import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const projects = [
  {
    title: "Smart Agriculture Platform",
    tagline: "1st Place — Terrathon 4.0, CISCO Problem Statement.",
    description:
      "Led AI/ML development for a smart agriculture platform spanning five models — from plant disease diagnosis to yield prediction — built for real farmers, not just a demo.",
    points: [
      "Multilingual Gemini chatbot for real-time plant disease diagnosis",
      "Smart irrigation system at 88.5% water-efficiency accuracy across 22 variables",
    ],
    metrics: [
      { label: "Disease Detection", value: "97%" },
      { label: "Crop Recommendation", value: "90.1%" },
      { label: "Price Prediction (R²)", value: "87.3%" },
    ],
    tech: "Python · TensorFlow · Computer Vision · XGBoost · Gemini LLM",
  },
  {
    title: "Docksmith",
    tagline: "A Docker analog, built from scratch in Python.",
    description:
      "Co-engineered a simplified container build & runtime system — image builds, content-addressed layer caching, and container isolation implemented directly via Linux OS primitives, with zero dependency on Docker, runc, or containerd.",
    points: [
      "Built the Docksmithfile parser (FROM, WORKDIR, ENV, COPY, RUN, CMD) with full grammar validation and 26/26 passing unit tests",
      "Designed a deterministic SHA-256 cache-key scheme (layer digest + instruction text + working-directory/env state) for instant cache-hit rebuilds",
    ],
    metrics: [
      { label: "Unit Tests Passing", value: "26/26" },
      { label: "Team Size", value: "4 Engineers" },
      { label: "External Dependencies", value: "Zero" },
    ],
    tech: "Python · Linux Systems Programming · Namespaces · chroot",
  },
  {
    title: "FinNexus",
    tagline: "Agentic AI for personal finance.",
    description:
      "A financial analytics platform using RAG and an LLM agent to read spending patterns, forecast cash flow, and generate reports — built around the fact that most people track expenses but never act on the data.",
    points: [
      "Interactive Chart.js dashboards for transaction and budget visualization",
      "Domain-specific prompt pipelines tuned for financial coaching and tax-saving guidance",
    ],
    metrics: [
      { label: "AI Agents", value: "5" },
      { label: "Track, Don't Act Gap", value: "78%" },
      { label: "Stack", value: "RAG + Groq" },
    ],
    tech: "Agentic AI · RAG · Groq · Chart.js · React",
  },
  {
    title: "Multimodal Emotion Recognition",
    tagline: "Research — stress-aware, real-time music therapy. Manuscript submitted to IEEE.",
    description:
      "Led development of a three-modality emotion recognition system that fuses text, audio, and video signals to drive real-time, stress-adaptive music generation.",
    points: [
      "Novel Hierarchical Fusion with Adaptive Certainty Weighting (HF-ACW) across 7 emotion classes",
      "Sub-10s end-to-end latency on CPU-only hardware, driving dynamically parameterized MusicGen prompts",
    ],
    metrics: [
      { label: "Text Accuracy", value: "94%" },
      { label: "Video Accuracy", value: "82%" },
      { label: "Latency", value: "<10s" },
    ],
    tech: "PyTorch · Hugging Face · Signal Processing · MusicGen",
  },
  {
    title: "Amazon Bin Inventory Reconciliation",
    tagline: "ML pipeline benchmarking for warehouse automation.",
    description:
      "Benchmarked deep learning against classical ML for automated item counting in Amazon warehouse bin images — testing whether transfer learning actually earns its complexity.",
    points: [
      "Systematic ablations across 3 CNN architectures (ResNet18/34/50) and 3 optimizers with cyclical learning rates",
      "ResNet34 with transfer learning outperformed an SVM + HOG + PCA baseline by over 75%",
    ],
    metrics: [
      { label: "Best Val. Accuracy", value: "54.6%" },
      { label: "RMSE", value: "1.12" },
      { label: "vs. SVM Baseline", value: "+75%" },
    ],
    tech: "PyTorch · Scikit-learn · ResNet · SVM · AWS S3",
  },
  {
    title: "MediAI — Smart Health Companion",
    tagline: "AI health assistant for everyday risk tracking.",
    description:
      "A one-stop health assistant combining Med-BERT risk prediction with Google Fit data, a query chatbot, and emergency QR-code sharing.",
    points: [
      "AI chatbot handling 100+ common health queries with lifestyle suggestions",
      "Automated reminders and QR-based emergency access for rapid care",
    ],
    metrics: [
      { label: "Risk Prediction Accuracy", value: "92%" },
      { label: "Reminder Adherence", value: "+40%" },
      { label: "Queries Handled", value: "100+" },
    ],
    tech: "Python · Streamlit · FastAPI · Firebase · Hugging Face",
  },
  {
    title: "Dynamic Content Stream",
    tagline: "Distributed streaming with Kafka.",
    description:
      "A four-node distributed content streaming platform built across a virtual network, with a full topic lifecycle managed through a real-time admin dashboard.",
    points: [
      "Multi-threaded producer with automated ingestion and dynamic topic assignment",
      "Self-updating consumer with live subscribe/unsubscribe across topics",
    ],
    metrics: [
      { label: "Nodes", value: "4" },
      { label: "Topic Mgmt", value: "Real-time" },
      { label: "Stack", value: "Kafka + Flask" },
    ],
    tech: "Apache Kafka · Flask · REST APIs · Distributed Systems",
  },
  {
    title: "SAV4SECURE",
    tagline: "Winner — Smart India Hackathon Junior 2023.",
    description:
      "An iOS-based automation system combining GPS, Bluetooth triggers, and embedded tracking logic to improve safety for children, seniors, and transported goods.",
    points: [
      "Cross-platform safety tracking built for schools, healthcare, and logistics",
      "Won nationally against teams from across the country",
    ],
    metrics: [
      { label: "Award", value: "SIH Jr. '23" },
      { label: "Trigger Types", value: "GPS + BLE" },
      { label: "Target Domains", value: "3" },
    ],
    tech: "iOS · GPS · Bluetooth · Embedded Systems",
  },
]

// Distance a horizontal drag/swipe needs to cover before it counts as a page change
const SWIPE_THRESHOLD = 60

const Projects = () => {
  const [[index, direction], setIndex] = useState([0, 0])

  const total = projects.length
  const project = projects[index]

  const goTo = (newIndex, dir) => {
    const wrapped = (newIndex + total) % total
    setIndex([wrapped, dir])
  }

  const handleDragEnd = (_e, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goTo(index + 1, 1)
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goTo(index - 1, -1)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") goTo(index + 1, 1)
    if (e.key === "ArrowLeft") goTo(index - 1, -1)
  }

  return (
    <section id="projects" className="pt-8 pb-8 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* ---------- HEADER ROW ---------- */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Projects
            </h2>
          </div>

          <p className="hidden sm:block font-mono text-sm text-muted tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        {/* ---------- CARD STAGE ---------- */}
        <div
          className="relative mt-10 md:mt-14"
          role="group"
          aria-roledescription="carousel"
          aria-label="Projects"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* PREV ARROW */}
          <button
            onClick={() => goTo(index - 1, -1)}
            aria-label="Previous project"
            className="
              hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
              w-11 h-11 items-center justify-center rounded-full
              bg-glass border border-glassBorder backdrop-blur-xl
              hover:border-accent hover:text-accent transition
            "
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* NEXT ARROW */}
          <button
            onClick={() => goTo(index + 1, 1)}
            aria-label="Next project"
            className="
              hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
              w-11 h-11 items-center justify-center rounded-full
              bg-glass border border-glassBorder backdrop-blur-xl
              hover:border-accent hover:text-accent transition
            "
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* CARD */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={handleDragEnd}
                className="
                  rounded-3xl border border-glassBorder bg-glass backdrop-blur-xl
                  px-8 py-10 md:px-14 md:py-14
                  cursor-grab active:cursor-grabbing select-none
                "
              >
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-base md:text-lg text-accent">
                  {project.tagline}
                </p>

                <p className="mt-6 max-w-3xl text-muted">
                  {project.description}
                </p>

                <ul className="mt-6 space-y-2 text-muted">
                  {project.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      <span className="text-accent mr-2">—</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* ---------- SPEC SHEET ---------- */}
                <div className="mt-9 tick-rule" />
                <div className="grid grid-cols-3 gap-4 md:gap-8 mt-5">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-lg md:text-2xl font-medium tabular-nums">
                        {m.value}
                      </p>
                      <p className="mt-1 text-[11px] md:text-xs text-muted uppercase tracking-wide">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 font-mono text-xs text-muted">
                  {project.tech}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ---------- DOTS (mobile-friendly nav) ---------- */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              aria-label={`Go to project ${i + 1}`}
              className={`
                h-1.5 rounded-full transition-all
                ${i === index ? "w-6 bg-accent" : "w-1.5 bg-glassBorder"}
              `}
            />
          ))}
        </div>

        {/* ---------- DESKTOP HINT ---------- */}
        <p className="hidden md:block mt-6 text-xs text-muted">
          Drag, or use the arrows / ← → keys to browse.
        </p>
      </div>
    </section>
  )
}

export default Projects

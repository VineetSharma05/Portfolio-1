// Projects shown in the bento grid, the detail sheet and Quick view.
//
// size:   "lg" = wide featured tile, "md" = standard tile
// links:  any empty URL is hidden. Add repo / demo / paper links here.
// visual: optional decorative panel on large tiles ("terminal")

export const projects = [
  {
    id: "docksmith",
    title: "Docksmith",
    tagline: "A Docker-style container engine, built from scratch in Python.",
    description:
      "Co-engineered a simplified container build & runtime system: image builds, content-addressed layer caching, and container isolation implemented directly on Linux OS primitives, with no dependency on Docker, runc or containerd.",
    points: [
      "Built the Docksmithfile parser (FROM, WORKDIR, ENV, COPY, RUN, CMD) with full grammar validation, covered by 26/26 passing unit tests.",
      "Designed a deterministic SHA-256 cache key (parent layer digest + instruction text + working-directory/env state) so unchanged steps rebuild instantly from cache.",
      "Isolated containers using Linux namespaces and chroot, built as a team of four engineers.",
    ],
    metrics: [
      { value: "26/26", label: "Parser tests passing" },
      { value: "SHA-256", label: "Content-addressed layers" },
      { value: "6", label: "Build instructions" },
    ],
    tech: ["Python", "Linux namespaces", "chroot", "Systems programming"],
    size: "lg",
    visual: "terminal",
    links: { code: "", demo: "", paper: "" },
  },
  {
    id: "saarthi",
    title: "Saarthi: Smart Agriculture",
    tagline: "Five ML models, one platform for farmers.",
    badge: "1st place · Terrathon 4.0",
    description:
      "Led AI/ML development for an end-to-end smart farming platform covering plant disease diagnosis, crop recommendation, price prediction and irrigation. Won Terrathon 4.0 on the CISCO problem statement.",
    points: [
      "Multilingual Gemini chatbot for real-time plant disease diagnosis.",
      "Smart irrigation model reaching 88.5% water-efficiency accuracy across 22 variables.",
    ],
    metrics: [
      { value: "97%", label: "Disease detection" },
      { value: "90.1%", label: "Crop recommendation" },
      { value: "0.873", label: "Price prediction R²" },
    ],
    tech: ["Python", "TensorFlow", "Computer Vision", "XGBoost", "Gemini"],
    size: "md",
    links: { code: "", demo: "", paper: "" },
  },
  {
    id: "emotion",
    title: "Multimodal Emotion Recognition",
    tagline: "Text, audio and video fused to drive stress-adaptive music.",
    badge: "IEEE manuscript submitted",
    description:
      "Research at CDSAML, PES University. Led development of a three-modality emotion recognition system whose output drives real-time, stress-adaptive music generation.",
    points: [
      "BERT-Transformer for text, CNN-BiLSTM for audio and a custom CNN for video.",
      "Novel Hierarchical Fusion with Adaptive Certainty Weighting (HF-ACW) across 7 emotion classes.",
      "Sub-10s end-to-end latency on CPU-only hardware, driving dynamically parameterised MusicGen prompts.",
    ],
    metrics: [
      { value: "94%", label: "Text val. accuracy" },
      { value: "82%", label: "Video val. accuracy" },
      { value: "<10s", label: "Latency, CPU only" },
    ],
    tech: ["PyTorch", "Hugging Face", "BERT", "MusicGen"],
    size: "md",
    links: { code: "", demo: "", paper: "" },
  },
  {
    id: "finnexus",
    title: "FinNexus",
    tagline: "Agentic AI that turns spending data into action.",
    description:
      "A personal-finance analytics platform where an LLM agent system reads spending patterns, forecasts cash flow and writes reports. It is built around the fact that most people track expenses but never act on the data.",
    points: [
      "Five cooperating AI agents grounded in the user's own transactions via RAG.",
      "Domain-specific prompt pipelines tuned for financial coaching and tax-saving guidance.",
      "Interactive Chart.js dashboards for transactions and budgets.",
    ],
    metrics: [
      { value: "5", label: "Cooperating AI agents" },
    ],
    tech: ["Agentic AI", "RAG", "Groq", "React", "Chart.js"],
    size: "md",
    links: { code: "", demo: "", paper: "" },
  },
  {
    id: "mediai",
    title: "MediAI",
    tagline: "An AI health companion for everyday risk tracking.",
    description:
      "A one-stop health assistant combining Med-BERT risk prediction with Google Fit data, a health-query chatbot, automated reminders and emergency QR-code sharing.",
    points: [
      "Chatbot handling 100+ common health queries with lifestyle suggestions.",
      "QR-based emergency access to critical health info for faster care.",
    ],
    metrics: [
      { value: "92%", label: "Risk prediction accuracy" },
      { value: "100+", label: "Health queries handled" },
      // TODO(Vineet): only re-add if you can explain how it was measured.
      // { value: "+40%", label: "Reminder adherence" },
    ],
    tech: ["Python", "FastAPI", "Streamlit", "Firebase", "Hugging Face"],
    size: "md",
    links: { code: "", demo: "", paper: "" },
  },
  {
    id: "kafka",
    title: "Dynamic Content Stream",
    tagline: "A four-node distributed streaming platform on Kafka.",
    description:
      "A distributed content-streaming platform running across a four-node virtual network, with the full topic lifecycle managed through a real-time admin dashboard.",
    points: [
      "Multi-threaded producer with automated ingestion and dynamic topic assignment.",
      "Self-updating consumers with live subscribe and unsubscribe across topics.",
    ],
    metrics: [],
    tech: ["Apache Kafka", "Flask", "REST APIs", "Distributed systems"],
    size: "md",
    links: { code: "", demo: "", paper: "" },
  },
  {
    id: "bins",
    title: "Amazon Bin Reconciliation",
    tagline: "Does transfer learning earn its complexity? Benchmarked.",
    description:
      "Benchmarked deep learning against classical ML for automated item counting in Amazon warehouse bin images, a hard, cluttered counting task.",
    points: [
      "Systematic ablations across ResNet18/34/50 and three optimisers with cyclical learning rates.",
      "ResNet34 with transfer learning beat an SVM + HOG + PCA baseline by over 75%, at 54.6% best validation accuracy and 1.12 RMSE.",
    ],
    metrics: [
      { value: "+75%", label: "vs. SVM baseline" },
      { value: "1.12", label: "RMSE (item count)" },
    ],
    tech: ["PyTorch", "scikit-learn", "ResNet", "AWS S3"],
    size: "md",
    links: { code: "", demo: "", paper: "" },
  },
  {
    id: "sav4secure",
    title: "SAV4SECURE",
    tagline: "Location-aware safety tracking for people and goods.",
    badge: "Winner · SIH Junior 2023",
    description:
      "An iOS-based automation system combining GPS, Bluetooth triggers and embedded tracking logic to improve safety for children, seniors and transported goods. Won Smart India Hackathon Junior 2023 at the national level.",
    points: [
      "GPS and BLE triggers driving automated safety alerts.",
      "Designed for three domains: schools, healthcare and logistics.",
    ],
    metrics: [],
    tech: ["iOS", "GPS", "Bluetooth LE", "Embedded systems"],
    size: "md",
    wideOnTablet: true,
    links: { code: "", demo: "", paper: "" },
  },
]

export const linkLabels = { code: "Code", demo: "Live demo", paper: "Paper" }

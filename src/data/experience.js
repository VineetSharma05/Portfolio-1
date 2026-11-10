export const nowBuilding = {
  role: "Founder",
  org: "Trailo & CUE",
  range: "Aug ’26 — Present",
  note: "Two early-stage products, currently in stealth. More soon.",
}

export const work = [
  {
    role: "Software Engineering Intern",
    org: "Fiserv Global Services",
    range: "Jun ’26 — Aug ’26",
    summary: "Built a Flask release-intelligence platform on Confluence APIs, automating hours of manual sign-off analysis.",
    points: [
      "Built a Flask-based release intelligence platform integrating Confluence REST APIs with BeautifulSoup parsing, replacing hours of manual RC-table analysis with automated, team-level sign-off dashboards.",
      "Architected real-time source-freshness detection using Confluence version-metadata diffing, 60-second polling and browser Visibility/Focus APIs, backed by a thread-safe session store with auto-expiry.",
    ],
    tags: ["Python", "Flask", "Confluence REST API", "JavaScript"],
  },
  {
    role: "Research Intern & Lead Developer",
    org: "CDSAML, PES University",
    range: "Jun ’25 — Aug ’25",
    summary: "Led a text/audio/video emotion-recognition system driving real-time music therapy; IEEE manuscript submitted.",
    points: [
      "Architected a 3-modality emotion recognition system (BERT-Transformer for text at 94% val. accuracy, CNN-BiLSTM for audio, custom CNN for video at 82%) fused via a novel Hierarchical Fusion with Adaptive Certainty Weighting mechanism.",
      "Engineered a real-time, stress-adaptive music therapy pipeline with sub-10s end-to-end latency on CPU-only hardware; co-authored a manuscript submitted to IEEE.",
    ],
    tags: ["PyTorch", "Hugging Face", "BERT", "MusicGen"],
  },
]

export const leadership = [
  {
    role: "Club Head",
    org: "NEXUS Technical Club, PES University",
    range: "Jan ’24 — Aug ’26",
    highlight: { value: "10×", label: "members, 20 → 200+" },
    point:
      "Built a 32-member core team and founded NEXUS Community, a peer-teaching program across AI/ML, Web and Cybersecurity that upskilled 200+ students.",
  },
  {
    role: "Head of Marketing",
    org: "PES The Amateur Manager and Scientists",
    range: "Mar ’24 — Sep ’24",
    highlight: { value: "8,000+", label: "national participants" },
    point:
      "Designed a phased, city-wise segmented outreach campaign for one of PES University's largest tech-business events.",
  },
  {
    role: "Marketing Head, “Aagaaz”",
    org: "Physics Wallah",
    range: "Feb ’24 — Mar ’24",
    highlight: { value: "1,000+", label: "offline attendees" },
    point:
      "Coordinated branding and outreach for Physics Wallah's first Bangalore launch event.",
  },
]

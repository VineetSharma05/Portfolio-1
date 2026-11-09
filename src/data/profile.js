// Single source of truth for personal info, links and headline numbers.
// Empty link strings are hidden everywhere in the UI, so fill them in when ready.

export const profile = {
  name: "Vineet Sharma",
  firstName: "Vineet",
  location: "Bengaluru, India",
  email: "vineetsharma2205@gmail.com",
  headline: "Engineer working across AI/ML, distributed systems and product.",
  links: {
    github: "https://github.com/VineetSharma05",
    linkedin: "https://www.linkedin.com/in/vineet-sharma-5a9320312/",
    resume: "/resume.pdf",
    leetcode: "", // e.g. "https://leetcode.com/u/<username>/"
    instagram: "", // e.g. "https://instagram.com/<username>"
  },
}

export const stats = [
  { to: 2, suffix: "", label: "National hackathon wins" },
  { to: 10, suffix: "×", label: "Club growth, 20 → 200+ members" },
  { to: 8000, suffix: "+", label: "Participants from one campaign" },
  { to: 1, suffix: "", label: "IEEE manuscript, co-authored" },
]

export const education = [
  {
    school: "PES University, Bengaluru",
    detail: "B.Tech, Computer Science & Engineering",
    range: "2023 — 2027",
    note: "CGPA 8.29",
  },
  {
    school: "AECS Maaruti Magnolia Public School",
    detail: "CBSE · Class XII 91% · Class X 89%",
    range: "2016 — 2023",
  },
]

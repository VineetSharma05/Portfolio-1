import { profile } from "../data/profile"

const YEAR = new Date().getFullYear()

export default function Footer() {
  const { links, email, name } = profile
  const items = [
    ["GitHub", links.github],
    ["LinkedIn", links.linkedin],
    ["LeetCode", links.leetcode],
    ["Instagram", links.instagram],
    ["Email", `mailto:${email}`],
  ].filter(([, url]) => url)

  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] text-muted">
          © {YEAR} {name} · Built in Bengaluru
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          {items.map(([label, url]) => (
            <li key={label}>
              <a
                href={url}
                {...(url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted transition hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

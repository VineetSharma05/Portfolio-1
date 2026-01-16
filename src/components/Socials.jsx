const Socials = () => {
  return (
    <section className="bg-glass border-t border-glassBorder py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-muted">
            Elsewhere
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-base">
            {[
              ["GitHub", "https://github.com/VineetSharma05"],
              ["LinkedIn", "https://www.linkedin.com/in/vineet-sharma-5a9320312/"],
              ["LeetCode", "https://leetcode.com/caraxes22"],
              ["Instagram", "https://instagram.com/yourusername"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition"
              >
                {label}
              </a>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted">
            © {new Date().getFullYear()} Vineet
          </p>
        </div>
      </div>
    </section>
  )
}

export default Socials

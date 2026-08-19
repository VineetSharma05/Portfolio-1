const Socials = () => {
  return (
    <footer className="mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="tick-rule" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
          Elsewhere
        </p>

        <div className="flex flex-wrap gap-8 text-sm">
          <a
            href="https://github.com/VineetSharma05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vineet-sharma-5a9320312/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            LeetCode
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition"
          >
            Instagram
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Vineet Sharma
          </p>
          <p className="font-mono text-xs text-muted">
            Built in Bengaluru
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Socials

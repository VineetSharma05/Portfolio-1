const Contact = () => {
  return (
    <section id="contact" className="py-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Let’s talk
          </h2>

          <p className="mt-6 text-lg text-muted">
            I’m currently open to opportunities, collaborations, and
            conversations around meaningful products and engineering problems.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="mailto:vineetsharma2205@gmail.com"
              className="px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
            >
              Email me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-glassBorder text-sm font-medium hover:bg-glass transition"
            >
              View resume
            </a>

            <a
              href="https://github.com/VineetSharma05"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-glassBorder text-sm font-medium hover:bg-glass transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

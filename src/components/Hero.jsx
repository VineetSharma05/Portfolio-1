const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 pt-32">
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          Building thoughtful <br />
          digital experiences.
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-lg text-muted">
          I’m Vineet — an engineer focused on building clean, scalable, and
          impactful systems across AI, web, and real-world problem spaces.
        </p>

        {/* CTA */}
        <div className="mt-10 flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-90 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-glassBorder text-sm font-medium text-foreground hover:bg-glass transition"
          >
            Get in touch
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero

import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-sm text-accent tracking-widest uppercase">404</p>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
          This page doesn’t exist.
        </h1>

        <p className="mt-4 text-muted">
          The link might be broken, or the page may have moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 text-sm font-medium border-b border-muted hover:border-accent hover:text-accent transition"
        >
          ← Back home
        </Link>
      </div>
    </section>
  )
}

export default NotFound

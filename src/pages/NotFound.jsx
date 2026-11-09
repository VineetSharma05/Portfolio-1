import { Link } from "react-router-dom"
import { ArrowRight } from "../components/ui/icons"

const NotFound = () => {
  return (
    <section className="flex min-h-[100svh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-display text-[120px] md:text-[160px] font-semibold leading-none tracking-[-0.06em] text-gradient">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight">
          This page doesn’t exist.
        </h1>
        <p className="mt-3 text-muted">The link might be broken, or the page may have moved.</p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-white"
        >
          Back home <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}

export default NotFound

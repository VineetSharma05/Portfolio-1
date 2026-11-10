const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition duration-300 ease-apple whitespace-nowrap"

const variants = {
  solid: "bg-foreground text-background px-5 py-2.5 hover:bg-white hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "border border-white/15 text-foreground px-5 py-2.5 hover:border-white/30 hover:bg-white/[0.04]",
  ghost: "text-muted px-3 py-2 hover:text-foreground",
}

/**
 * Rounded, Apple-style button. Renders an <a> when given `href`
 * (external links open in a new tab), otherwise a <button>.
 */
export default function Pill({ href, variant = "outline", className = "", children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    const external = /^https?:|\.pdf$/.test(href)
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

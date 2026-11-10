/** @type {import('tailwindcss').Config} */
const rgb = (name) => `rgb(var(--${name}-rgb) / <alpha-value>)`

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: rgb("bg"),
        surface: rgb("surface"),
        foreground: rgb("fg"),
        muted: rgb("muted"),
        // Single animatable accent: teal by default, purple in the other mood
        accent: "color-mix(in srgb, var(--accent) calc(<alpha-value> * 100%), transparent)",
      },
      fontFamily: {
        display: ['"Inter Tight"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}

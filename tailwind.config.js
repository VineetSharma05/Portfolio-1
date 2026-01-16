/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        glass: "var(--glass)",
        glassBorder: "var(--glass-border)",
      },
    },
  },
  plugins: [],
}

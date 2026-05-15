/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg:        "var(--bg)",
        "bg-2":    "var(--bg-2)",
        "bg-3":    "var(--bg-3)",
        ink:       "var(--ink)",
        "ink-2":   "var(--ink-2)",
        mute:      "var(--mute)",
        "mute-2":  "var(--mute-2)",
        rule:      "var(--rule)",
        "rule-2":  "var(--rule-2)",
        ember:     "var(--ember)",
        "ember-2": "var(--ember-2)",
        good:      "var(--good)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Geist", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "ui-monospace", "SFMono-Regular"],
      },
      transitionTimingFunction: {
        ease:      "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-soft": "cubic-bezier(0.32, 0.72, 0.18, 1)",
      },
      transitionDuration: {
        fast: "240ms",
        mid:  "520ms",
        slow: "880ms",
      },
    },
  },
  plugins: [],
};

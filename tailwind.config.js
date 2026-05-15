/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  "oklch(0.985 0.003 60)",
          100: "oklch(0.96 0.004 60)",
          200: "oklch(0.90 0.004 60)",
          300: "oklch(0.84 0.004 60)",
          400: "oklch(0.72 0.005 60)",
          500: "oklch(0.62 0.005 60)",
          600: "oklch(0.50 0.006 60)",
          700: "oklch(0.36 0.008 60)",
          750: "oklch(0.30 0.009 60)",
          800: "oklch(0.26 0.010 60)",
          850: "oklch(0.22 0.011 60)",
          900: "oklch(0.20 0.012 60)",
          950: "oklch(0.16 0.012 60)",
          975: "oklch(0.125 0.010 60)",
        },
        ember: {
          DEFAULT: "oklch(0.78 0.14 65)",
          dim:     "oklch(0.68 0.12 65)",
          deep:    "oklch(0.55 0.10 65)",
          glow:    "oklch(0.84 0.13 70)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 9vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display":    ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        "kicker":     ["0.72rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.23, 1, 0.32, 1)",
        "out-expo":  "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        "sheen": {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
      },
    },
  },
  plugins: [],
};

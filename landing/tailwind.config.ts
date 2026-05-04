import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        amber: {
          glow: "rgba(245, 158, 11, 0.18)",
        },
      },
      animation: {
        "slide-up": "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

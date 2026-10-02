import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0B1D3A", // Primary brand voltage
          800: "#142D5E",
          700: "#1E3F7A",
          600: "#2A5A9E",
        },
        gold: {
          600: "#B09040",
          500: "#C8A850", // Primary accent voltage
          400: "#D4B86E",
          100: "#F5EBD9",
        },
        stone: {
          50: "#FAFAF9", // Warm editorial canvas
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
          950: "#0C0A09",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        gold: "0 4px 14px 0 rgba(200, 168, 80, 0.35)",
        "gold-hover": "0 8px 25px -5px rgba(200, 168, 80, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;

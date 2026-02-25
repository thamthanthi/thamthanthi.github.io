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
        primary: {
          50: "#eef2ff",
          100: "#d8e2f8",
          200: "#b3c5f0",
          300: "#7e9fe4",
          400: "#4a72d4",
          500: "#1e4fc2",
          600: "#1a3e9e",
          700: "#15307c",
          800: "#0e2160",
          900: "#0a1842",
          950: "#060e28",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        brand: {
          navy: "#0a1842",
          navyDark: "#060e28",
          blue: "#1a3e9e",
          gold: "#f59e0b",
          goldLight: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Sarabun", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16191f",
        pearl: "#f4f1eb",
        blush: "#e7d9c3",
        wine: "#9b6c3e",
        brass: "#c7a36e",
        mist: "#e8e4dc"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 64px rgba(22, 25, 31, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;

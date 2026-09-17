import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#163b35",
        pearl: "#f7f4ec",
        blush: "#e7d4ad",
        wine: "#d6573b",
        brass: "#d7983c",
        mist: "#e2e9dc"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(22, 59, 53, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#07090D",
        panel: "#11151D",
        line: "#2A3140",
        ink: "#F3F6FC",
        electric: "#3AA6FF",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(58,166,255,0.12), 0 16px 48px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(58,166,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(58,166,255,.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
    },
  },
  plugins: [],
};

export default config;

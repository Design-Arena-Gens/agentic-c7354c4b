import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        parchment: "#f9f9f9",
        ash: "#d1d1d1"
      },
      fontFamily: {
        mono: ["\"Special Elite\"", "\"Courier New\"", "Courier", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;

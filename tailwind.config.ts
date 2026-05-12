import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        charcoal: "#4A4A4A",
        gold: "#E6C961",
        "gold-light": "#F0E4C0",
        offwhite: "#F2F0ED",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["Branch", "Georgia", "Cambria", "Times New Roman", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

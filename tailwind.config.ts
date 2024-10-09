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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      margin: {
        "26": "6.5rem",
      },
      animation: {
        fadeInBottom: "fadeInBottom 1.5s ease-in-out forwards",
      },
      transitionDelay: {
        500: "500ms",
        1000: "1000ms",
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
        3000: "3000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [],
};
export default config;

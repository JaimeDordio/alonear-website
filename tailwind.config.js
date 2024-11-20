/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,css}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: [
        "Monaco",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
      serif: ["var(--font-brigesta)"],
    },
    container: {
      center: true,
      screens: {
        sm: "50rem",
      },
    },
    extend: {
      fontFamily: {
        serif: ["var(--font-brigesta)"],
      },

      colors: {
        black: {
          50: "#2E2E2E",
          100: "#2B2B2B",
          200: "#262626",
          300: "#212121",
          400: "#1C1C1C",
          500: "#171717",
          600: "#121212",
          700: "#0D0D0D",
          800: "#080808",
          900: "#030303",
          950: "#000000",
        },
        primary: {
          50: "#A8AAA4",
          100: "#9EA09A",
          200: "#898D85",
          300: "#757870",
          400: "#61635D",
          500: "#4C4E49",
          600: "#30312E",
          700: "#141413",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        secondary: {
          50: "#757575",
          100: "#6B6B6B",
          200: "#565656",
          300: "#424242",
          400: "#2D2D2D",
          500: "#191919",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [],
};

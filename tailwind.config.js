/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "blue-shade": "#6333e3",
        neon: "#beeb42",
        blueviolet: "#5c27c0",
        gray: "#1e1e1e",
        darkgray: "#a0a0a0",
        "text-dark": "#202020",
        "text-medium": "#4b4b4b",
        "text-light": "#bbbbbd",
        blue: "#6d38fb",
        darkorange: "#ff9635",
      },
      spacing: {},
      fontFamily: {
        "poppins-regular-20": "Poppins",
        "coolvetica-56": "Coolvetica",
        "gilroy-semibold": "Gilroy-SemiBold",
        outfit: "Outfit",
        "gilroy-regular": "Gilroy-Regular",
      },
      borderRadius: {
        "7xs-7": "5.7px",
        "21xl": "40px",
        "3xs": "10px",
        "11xs-8": "1.8px",
        "12xs-9": "0.9px",
        "9xs-6": "3.6px",
        "4xs": "9px",
        "24xl-8": "43.8px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      sm: "0.88rem",
      "13xl": "2rem",
      xs: "0.75rem",
      base: "1rem",
      "37xl": "3.5rem",
      "5xl": "1.5rem",
      "21xl": "2.5rem",
      "3xs": "0.63rem",
      "61xl": "5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}


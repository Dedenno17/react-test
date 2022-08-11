/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#002B5B",
        darkGrey: "#0e1e2e",
        grey: "#2B4865",
        blue: "#256D85",
        tosca: "#8FE3CF",
      },
      animation: {
        "slide-1": "slide1 0.5s ease-in-out forwards",
        "slide-2": "slide2 0.5s ease-in-out forwards",
        "slide-3": "slide3 0.5s ease-in-out forwards",
        "pop-up": "popUp 0.5s ease-in-out forwards",
      },
      keyframes: {
        slide2: {
          "0%": { transform: "translateX(-66%)" },
          "100%": { transform: "translateX(-33%)" },
        },
        slide3: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(-66%)" },
        },
        slide1: {
          "0%": { transform: "translateX(-33%)" },
          "100%": { transform: "translateX(0)" },
        },
        popUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

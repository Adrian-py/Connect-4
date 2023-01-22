/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        white: "#F1FAEE",
        text: "#264653",
        blue: "#023E8A",
        yellow: "#F2C94C",
        red: "#EB5757",
      },
    },
  },
  plugins: [],
};

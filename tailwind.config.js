/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      gilroy: ["Gilroy", ...defaultTheme.fontFamily.sans],
      inconsolata: ["Inconsolata", ...defaultTheme.fontFamily.mono],
      "code-next": ["Code Next", ...defaultTheme.fontFamily.sans],
    },
    backgroundImage: {
      ...defaultTheme.backgroundImage,
      "hero-pattern":
        "url(../public/assets/img/backgrounds/square_lattice.png)",
      "hero-image":
        "url(../public/assets/img/circuits/hero_circuit.png)",
    },
    extend: {},
  },
  plugins: [],
};
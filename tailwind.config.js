/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        logo1: ["Righteous", "serif"],
        logo2: ["Pacifico", "cursive"],
        font1: ["Lexend", "sans-serif"],
        font2: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};

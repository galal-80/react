/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito",
      },
      colors: {
        primary: "#00587A",
        second: "#FFFFFF",
        third: "#4C4E64",
      },
    },
  },
  plugins: [],
};

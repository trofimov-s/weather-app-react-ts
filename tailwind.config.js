/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: "Comfortaa",
    },
    extend: {
      colors: {
        gray: {
          200: "#ebebeb",
          300: "#d3d3d3",
        },
      },
      spacing: {
        '17.5': '4.375rem', // 70px
      }
    },
  },
  plugins: [],
};

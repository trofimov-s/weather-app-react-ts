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
          300: "#d3d3d3",
        },
      },
    },
  },
  plugins: [],
};

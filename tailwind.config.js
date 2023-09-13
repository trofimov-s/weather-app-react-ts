/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      main: 'Comfortaa',
    },
    extend: {
      colors: {
        gray: {
          200: '#ebebeb',
          300: '#d3d3d3',
          700: '#0000008a',
        },
      },
      spacing: {
        4.5: '1.125rem', // 18px
        15: '3.75rem', // 60px
        17.5: '4.375rem', // 70px
        250: '62.5rem', // 1000px
      },
    },
  },
  plugins: [],
};

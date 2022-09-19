/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code'],
      },
    },
    colors: {
      dark: '#16213E',
      navy: '#0F3460',
      purple: '#533483',
      red: '#E94560',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};

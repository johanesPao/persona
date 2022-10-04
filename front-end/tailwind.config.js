/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Code'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#FFFFFF',
            a: {
              color: '#FFFFFF',
              '&:hover': {
                color: '#FFFFFF',
              },
            },
            pre: {
              color: '#FFFFFF',
              backgroundColor: '#7895B2',
            },
            'pre code::before': {
              'padding-left': 'unset',
            },
            'pre code::after': {
              'padding-right': 'unset',
            },
            code: {
              backgroundColor: '#011627',
              color: '#FFFFFF',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
              'padding-left': '0.25rem',
            },
            'code::after': {
              content: '""',
              'padding-right': '0.25rem',
            },
          },
        },
      },
    },
    colors: {
      dark: '#16213E',
      navy: '#0F3460',
      purple: '#533483',
      red: '#E94560',
      white: '#FFFFFF',
      grey: '#EEEEEE',
      green: '#59CEBF',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

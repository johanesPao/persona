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
              color: '#000000',
              backgroundColor: '#F8EDE3',
            },
            'pre code::before': {
              'padding-left': 'unset',
            },
            'pre code::after': {
              'padding-right': 'unset',
            },
            code: {
              backgroundColor: '#F8EDE3',
              color: '#000000',
              fontWeight: '400',
              'border-radius': '0.25rem',
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

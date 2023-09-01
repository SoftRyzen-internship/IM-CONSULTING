/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  mode: 'JIT',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '1.437rem',
        },
      },

      colors: {
        accent: '#FDC638',
        orange: '#F4A922',
        darkOrange: '#FFB800',
        lightOrange: '#FFD466',
        secondary: '#474747',
        bgColor: '#F0F0F0',
        white: '#FFFFFF',
        black: '#171717',
        gray: '#D9D9D9',
        lightGray: '#BABABA',
        red: '#FF4E4E',
      },

      fontFamily: {
        formular: ['Formular', 'sans-serif'],
      },

      fontSize: {
        8: ['8px'],
        12: ['12px'],
        14: ['14px'],
        16: ['16px'],
        18: ['18px'],
        20: ['20px'],
        24: ['24px'],
        28: ['28px'],
        32: ['32px'],
        36: ['36px'],
        42: ['42px'],
        55: ['55px'],
        66: ['66px'],
        97: ['97px'],
      },

      content: {
        // crossIcon: 'url("/icons/error-cross.svg")',
      },
    },
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
};

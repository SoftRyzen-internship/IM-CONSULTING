/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,mdx}'],
  mode: 'JIT',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2.25rem',
          xl: '2rem',
        },
      },

      fontFamily: {
        formular: ['var(--font-formular)', ...fontFamily.serif],
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
        darkGray: '#7D7D7D',
        red: '#FF4E4E',
      },

      fontSize: {
        font16: ['16px', { letterSpacing: '-0.64px' }], // className="text-font16"
        font16Long: ['16px', { letterSpacing: '0.64px' }],
        font20: ['20px', { letterSpacing: '-0.8px' }],
        font24: ['24px', { letterSpacing: '-0.96px' }],
        font28Long: ['28px', { letterSpacing: '1.12px', fontWeight: 400 }],
        font36: ['36px', { letterSpacing: '-1.44px', fontWeight: 300 }],
        font36Long: ['36px', { letterSpacing: '1.44px', fontWeight: 400 }],
      },

      content: {
        // crossIcon: 'url("/icons/error-cross.svg")',
      },
    },
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
};

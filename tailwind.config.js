/** @type {import('tailwindcss').Config} */

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
        inter: ['Inter', 'sans-serif'],
        formular: ['Formular', 'sans-serif'],
      },

      fontSize: {
        // little: ['12px', '24px'], // class="text-little"
        // small: ['18px', '24px'], // class="text-small"
      },

      content: {
        // crossIcon: 'url("/icons/error-cross.svg")',
      },
    },
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
};

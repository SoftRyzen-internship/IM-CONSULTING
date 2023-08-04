/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'JIT',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        white: '#FFFFFF',
        red: '#FF5757',
        whiteTransparent: 'rgba(255, 255, 255, 0.5)',
        whitePlaceholder: 'rgba(255, 255, 255, 0.2)',
        bgInput: 'rgba(255, 255, 255, 0.05)',
        bgBtn: 'rgba(255, 255, 255, 0.1)',
        bgMain: '#000000',
        bgMenu: 'rgba(1, 10, 5, 0.75)',
        slideOverlay: 'rgba(2, 15, 8, 0.75)',
        bgSkeleton: 'rgba(199, 199, 199, 0.3)',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      fontSize: {
        little: ['12px', '24px'], // class="text-little"
        small: ['18px', '24px'], // class="text-small"
        middle: ['28px', '28px'], // class='text-middle'
        big: ['98px', '98px'], // class="text-big"

        mainMob: ['14px', '20px'],
        mainTab: ['16px', '20px'],
      },

      content: {
        crossIcon: 'url("/icons/error-cross.svg")',
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};

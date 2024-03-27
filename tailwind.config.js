/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FCFDF9',
        secondary: '#ECFAC5',
        borderColor: '#C5DE6B',
        textColor: '#37410C',

        darkPrimary: '#10120A',
        darkSecondary: '#232813',
        darkborderColor: '#465215',
        darkTextColor: '#DDEFA8',
      },
      fontFamily: {
        titleFont: ['Playfair Display', 'sans-serif'],
        textFont: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '3.5rem',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      transform: ['active'],
    },
  },
  plugins: [],
};

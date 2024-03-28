/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        tablette: { max: '1023px' },
        mobile: { max: '639px' },
      },
      colors: {
        primary: '#FCFDF9',
        secondary: '#ECFAC5',
        tertinary: '#A5C200',
        borderColor: '#232813',
        textColor: '#10120A',
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

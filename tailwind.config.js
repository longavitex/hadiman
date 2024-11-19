/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '520px',
        '3xl': '1840px'
      },
      spacing: {
        '7.5': '1.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
    colors: {
      transparent: 'transparent',
      'orange': '#FF6600',
      'blue': '#2D77DC',
      'yellow': '#F2B201',
      'red': '#D31B41',
      'black': '#202020',
      'variant1': '#616265',
      'variant2': '#A1A2A8',
      'dark': '#171C38',
      'white': '#FFFFFF',
      'surface': '#F7F7F7',
      'outline': '#E4E4E4',
    },
  },
  plugins: [],
}
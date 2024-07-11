/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#34d399',
        dark: '#0f172a'
      },
      spacing:{
        '17': '73px',
        '30': '120px',
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}


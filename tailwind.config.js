/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        ptext : '#1E293B',
        stext : '#64748B',
        primary : '#2563EB',
        secondary : '#FBBF24',
        higtlight : '#14B8A6',
      },
      screens : {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}


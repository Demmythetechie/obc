/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      keyframes: {
        reduce: {
          from: { width: '450px' },
          to: {width: '0px'}
        },
        increase: {
          from: { width: '0px' },
          to: { width: '450px' },
        },
      },
      animationDelay : {
        '5s' : '5s',
      },
      animationDuration : {
        '2s' : '2s',
        '50' : '50ms',
      },
      fontFamily: {
        'bebas': 'bebas',
        'Neue-light': 'Neue-light',
        'Neue-regular': 'Neue-regular',
        'Neue-bold': 'Neue-bold',
        'Neue-extrabold': 'Neue-extrabold',
        'Neue-heavy': 'Neue-heavy'
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('tailwindcss-animate'),
  ],
}
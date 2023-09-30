/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '376px',
      // => @media (min-width: 576px) { ... }

      'md': '999px',
      // => @media (min-width: 960px) { ... }

      'lg': '1290px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
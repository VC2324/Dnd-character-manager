// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dragon': ['DRAGONHUNTER', 'cursive']
      },
      colors: {
        brown: {
          900: '#4b2e20',
          800: '#5d3a27',
          700: '#6f4830',
        },
        gold: '#FFD700'
      },
    },
  },
  plugins: [],
}


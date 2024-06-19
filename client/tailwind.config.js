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
        gold: '#FFD700',

        reddnd: '#C73032',
        orangebarb: '#E7623E',
        goldpalalid: '#B59E54',
        purplerogue: '#AB6DAC',
        greenranger: '#507F62',
        silvercleric: '#91A1B2',
        ashrouge: '#555752',
        mossdruid: '#7A853B',
        bloodsorcerer: '#992E2E',
        rustfighter: '#7F513E',
        iriswarlock: '#7B469B',
        skymonky: '#51A5C5',
        cobaltwizard: '#2A50A1',
        tavernGreen: '#004B48',
        brown: {
          100: '#f7e9e0',
          200: '#e5b09e',
          300: '#d08e6e',
          400: '#b67b5b',
          500: '#9c6848',
          600: '#81553a',
          700: '#66402b',
          800: '#4b2b1d',
          900: '#30180f',

        }

      },
    },
  },
  plugins: [],
}


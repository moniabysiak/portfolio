/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      'dash': 'dash',
    },
    letterSpacing: {
      'tight': '-.025em'
    },
    extend: {
      colors: {
        'page': '#020916',
        'pink': '#FF61EF',
        'gray': '#9CA3AF',
        'hover-pink': '#fa42e7'
      },
      width: {
        'width1': '760px'
      },
      fontFamily: {
        "dmsans": " 'DM sans', sans-serif"
      }
    },
  },
  plugins: [],
}


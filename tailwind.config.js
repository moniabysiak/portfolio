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
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        'page': '#020916',
        'pink': '#FF61EF',
        'gray': '#9CA3AF',
        'hover-pink': '#f505dd'
      },
      width: {
        'width1': '760px',
      },
      fontFamily: {
        "dmsans": " 'DM sans', sans-serif"
      }
    },
  },
  plugins: [],
}


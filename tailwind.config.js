/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page': '#020916',
        'pink': '#FF61EF',
        'gray': '#9CA3AF'
      },
    },
  },
  plugins: [],
}


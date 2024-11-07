/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey:'#3d4152',
        customOrange: '#ff5200'
    },
  },
  plugins: [],
}
}
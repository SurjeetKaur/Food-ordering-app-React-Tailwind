/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey:'#3d4152',
        customOrange: '#ff5200', 
        customBackground:'rgb(255, 255, 255)',  
    },
    boxShadow: {
      bottomOnly:'0 8px 6px -6px #D1D5DB', 
  },
  },

  plugins: [],
}
}
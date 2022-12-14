/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      head:['Righteous']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
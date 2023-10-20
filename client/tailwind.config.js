/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'theam-color': '#073763',
        'verified': '#ff0000', 
       },
    },
   
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        "Poppins":['Poppins', 'sans-serif']
      }
     },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
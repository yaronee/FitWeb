/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          primary: ['Open Sans', 'sans-serif'], // Typo pour les titres
          secondary: ['Roboto', 'sans-serif'], // Typo pour le corps de texte
        },
      
      },
    },
    plugins: [],
  }
  
  
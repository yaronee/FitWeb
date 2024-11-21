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
  
  // tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        paleGreen: '#f8ffc2', // Ajoutez votre couleur ici
      },
    },
  },
};
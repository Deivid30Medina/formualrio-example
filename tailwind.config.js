/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'color-dnda-card' : 'rgb(242 244 245)',
          'color-dnda': '#002552',
          'color-institucional' : '#3366CC',
          'color-dnda-oscuro' : '#004884',
  
        },
        borderWidth: {
          'custom-2': '2px', // Define un grosor de borde personalizado
        },
        borderColor: {
          'custom-black': '#a5a5a5', // Define el color del borde personalizado
        },
        fontFamily: {
          serif: ['Montserrat', 'Georgia', 'serif'],
        },
      },
    },
    plugins: [],
  }
  
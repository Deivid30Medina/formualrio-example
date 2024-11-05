/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scale-infinite": "scaleAnim 3s ease-in-out infinite", // Animación personalizada
      },
      keyframes: {
        scaleAnim: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" }, // Aumenta el tamaño al 110%
        },
      },
      colors: {
        "color-dnda-card": "rgb(242 244 245)",
        "color-dnda": "#002552",
        "color-institucional": "#3366CC",
        "color-dnda-oscuro": "#004884",
        "color-obligatorio-form": "#2494db",
      },
      borderWidth: {
        "custom-2": "2px", // Define un grosor de borde personalizado
      },
      borderColor: {
        "custom-black": "#a5a5a5", // Define el color del borde personalizado
      },
      fontFamily: {
        workSans: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

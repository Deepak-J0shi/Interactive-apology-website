/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cute: ["Poppins", "sans-serif"],
      },
      colors: {
        lovePink: "#fbcfe8",
        lovePurple: "#e9d5ff",
      },
    },
  },
  plugins: [],
};

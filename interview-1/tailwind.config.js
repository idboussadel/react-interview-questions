/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#242424",
        blue: "#009Bff",
        red: "#ff0000bd",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{css,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "hsl(246, 100%, 66%)",
      },
    },
  },
  plugins: [],
};

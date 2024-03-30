/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },

      boxShadow: {
        secondary: "10px 10px 20px rbg(2, 2, 0.25)",
      },
    },
  },
  plugins: [],
}
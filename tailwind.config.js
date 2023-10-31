/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#121213",
        "dark-gray": "#3a3a3c",
        "bronze": "#b49f3a",
        "green": "#538d4e",
      }
    },
  },
  plugins: [],
}


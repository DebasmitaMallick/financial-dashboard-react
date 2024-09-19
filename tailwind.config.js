/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-grey": "#6F7177",
        "theme-blue": "#4B40EE",
        "text-dark": "#1A243A"
      }
    },
  },
  plugins: [],
}


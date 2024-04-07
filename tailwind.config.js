/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js}", "./*.html"],
  theme: {
    screens: {
      'tablet': {'max': '1024px'},
      'phone': {'max': '500px'}
    },
    extend: {},
  },
  plugins: [],
}
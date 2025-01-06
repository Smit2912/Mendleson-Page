/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
      rubik: ['Rubik', 'sans-serif'], // Add the Rubik font
    },
    colors: {
      customBlue: '#BFDBFF',
    },
  },
  },
  plugins: [],
}


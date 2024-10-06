/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03637C',
        secondary: '#023550',
        tertiary: '#07768F',
      }
    },
  },
  plugins: [],
}

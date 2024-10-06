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
        primary: '#1A181B',
        secondary: '#3B383D',
        tertiary: '#07768F',
      }
    },
  },
  plugins: [],
}

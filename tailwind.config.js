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
        accent: '#EF4444',
        primary: '#1A181B',
        // secondary: '#3B383D',
        // secondary: '#fdfffc',
        // secondary: '#023550',
        secondary: '#202124',
        tertiary: '#07768F',
      },
      gridTemplateRows: {
        '24': 'repeat(24, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

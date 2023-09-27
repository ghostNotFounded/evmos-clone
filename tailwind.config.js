/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/heroNebula.png')",
      },
      colors: {
        'customGray': '#a09d88',
      },
      animation: {
        'ping-slow': 'ping 1s linear infinite',
      },
      fontFamily: {
        'obitron': "Orbitron, sans-serif"
      }
    },
  },
  plugins: [],
}
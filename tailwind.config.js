/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      }
    },
  },
  plugins: [],
}


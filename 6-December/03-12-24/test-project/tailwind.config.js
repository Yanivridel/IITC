/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100': '24rem',
      },
      maxWidth: {
        '100': '24rem',
      }
    },
    borderWidth: {
      DEFAULT: '1px',
      '3': '3px',
      '5': '5px',
      '7': '7px',
      '9': '9px',
  }
  },
  plugins: [],
}
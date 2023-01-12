const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['var(--inter)', fontFamily.sans]
      },
      animation : {
        'bounce-120' : 'bounce 1s infinite 120ms',
        'bounce-200' : 'bounce 1s infinite 200ms',
      }
    },
  },
  plugins: [],
}

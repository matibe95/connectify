/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        'c-primary': '#00ADB5',
        'c-accent': '#FF2E63',
        'c-dark': '#252A34',
        'c-light': '#EAEAEA'
      }
    },
    fontFamily: {
      lexend: ['"Lexend Mega"', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}


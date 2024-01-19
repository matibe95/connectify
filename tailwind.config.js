/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

import keepPreset from "keep-react/preset";

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
        'c-primary': 'var(--color-primary)',
        'c-accent': 'var(--color-accent)',
        'c-dark': 'var(--color-dark)',
        'c-light': 'var(--color-light)',
        'c-green': 'var(--color-green)',
        'c-yellow': 'var(--color-yellow)',
        'c-red': 'var(--color-red)',
        'c-purple': 'var(--color-purple)',
        'c-blue': 'var(--color-blue)',
      }
    },
    animation: {
      'spin-slow': 'spin 35s linear infinite',
    },
    letterSpacing: {
      tightest: '-0.13em',
    },
    fontFamily: {
      lexend: ['"Lexend Mega"', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}


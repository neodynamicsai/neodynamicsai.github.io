const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md', './content/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          DEFAULT: '#ffffffff',
        },
        'secondary': {
          DEFAULT: '#EC4899',
        },
        'neutral': {
          DEFAULT: '#334756ff',
          50: '#2c394bff',
        },
        'accent': {
          DEFAULT: '#ff4c29ff',
        },
        'background': {
          DEFAULT: '#082032ff',
        },
        // To change these, use https://www.tailwindshades.com/ with https://tailwindcss.com/docs/customizing-colors or create your own custom colors.
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      fontFamily: {
        'dmsans': ['DM Sans', ...defaultTheme.fontFamily.sans],
        'pp-neue-machina': ['PP Neue Machina', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        bold: 700,
        ultrabold: 800,
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};

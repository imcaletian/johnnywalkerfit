const {nextui} = require('@nextui-org/theme');
const { Roboto } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|modal|table|ripple|spinner|spacer).js"
  ],
  theme: {
    extend: {
      fontFamily: {
        dela: ['var(--font-dela)'],
        inter: ['var(--font-inter)s'],
        poppins: ['var(--font-poppins)'],
        Roboto: ['var(--font-roboto)']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'off-white': '#f6f6f6',
        'accent-1': '#1f5082',
        'accent-2': '#072b43',
        'accent-3': '#12233e',
        'accent-4': '#02121f',
        'error': '#6e2b46',
      },  
    },
  },
  plugins: [nextui()],
}


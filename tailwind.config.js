/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      boxShadow: {
        shape: '0 8px 8px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255, 0.03) ',
      },
      backgroundImage: {
        bgHome: 'url(/bg.png)',
      },
    },
  },
  plugins: [],
}

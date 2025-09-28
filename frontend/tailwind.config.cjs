/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        accent: '#06b6d4',
        glass: 'rgba(255,255,255,0.06)'
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
}


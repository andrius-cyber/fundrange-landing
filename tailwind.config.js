/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        teal: { brand: '#1FBF8F', dark: '#17A07A', light: '#E8F9F4' },
        navy: { brand: '#1C2B4A', dark: '#111D33', light: '#243559' },
        slate: { brand: '#2C3E50' },
      },
    },
  },
}

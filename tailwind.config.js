/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2A5B7A',
        'brand-gold': '#C5A059',
        'brand-black': '#1A1A1A',
        'brand-beige': '#FDFBF7',
        'brand-accent': '#E8E2DA',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}

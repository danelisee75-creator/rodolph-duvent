/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'adr-gold': '#C9A961',
        'adr-blue': '#0A1F44',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        dancing: ['var(--font-dancing)'],
      }
    },
  },
  plugins: [],
}
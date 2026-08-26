/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0ECE4', // Light whitish-grey dusky tone
        gold: {
          primary: '#B89B42', // Slightly deepened gold for contrast
          highlight: '#D1B252',
        },
        text: {
          primary: '#1A1816', // Deep charcoal/black for readability
          muted: '#6B655B', // Dusky medium grey
        },
        smoke: 'rgba(0, 0, 0, 0.05)'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Neue Montreal"', '"DM Sans"', 'sans-serif'],
        label: ['"Geist Mono"', 'monospace'],
      },
      letterSpacing: {
        wide: '0.08em',
        widest: '0.25em',
      }
    },
  },
  plugins: [],
}

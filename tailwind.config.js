/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC', // Slate 50
        primary: '#0F172A', // Slate 900
        secondary: '#475569', // Slate 600
        accent: '#38BDF8', // Sky 400
        dark: '#CBD5E1', // Slate 300 (used for light borders now)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        drama: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

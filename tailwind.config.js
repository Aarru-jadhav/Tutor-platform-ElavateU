/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#4F46E5',     // Indigo
        secondary: '#0D9488',   // Teal
        accent: '#F59E0B',      // Amber
        textDark: '#1F2937',    // Dark Charcoal
        textMuted: '#6B7280',   // Cool Gray
        background: '#FFFFFF',  // White
      }
    },
  },
  plugins: [],
}


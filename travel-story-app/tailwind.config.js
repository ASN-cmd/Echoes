// travel-story-app/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Essential for Tailwind to scan your files
  ],
  theme: {
    fontFamily: {
        // Define your custom font family here
        // 'Poppins' will be the first font tried, followed by generic sans-serif
        sans: ['Poppins', 'sans-serif'],
      },

    extend: {
        colors: {
            primary: '#05B6D3', // Example primary color
            secondary: '#EF863E', // Example secondary color
        },
      
    },
  },
  plugins: [],
}
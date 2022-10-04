/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-splash': "url('../src/assets/splash-image.jpg')",
      },
      colors: {
        'landrupPurple': '#5E2E53'
      },
    },
  },
  plugins: [],
}

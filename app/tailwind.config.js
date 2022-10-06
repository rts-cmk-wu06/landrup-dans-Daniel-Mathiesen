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
      keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				fadeIn: "fadeIn 1s 1500ms linear forwards",
			},
    },
  },
  plugins: [],
}

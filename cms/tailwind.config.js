/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			...colors,
			blue: "#2075f8",
			orange: "#ff7b35",
			violet: "#0b0502",
			gray: "#e5e5e5",
			divBack: "#f2f7ff",
			whiteblue: "#F4F4F4",
		},
		screens: {
			xs: "280px",
			sm: "320px",
			msm: "380px",
			phone: "450px",
			five: "500px",
			tab: "640px",
			md: "780px",
			xtab: "960px",
			lg: "1100px",
			desktop: "1280px",
			xl: "1580px",
			"2xl": "1920px",
		},
	},

	plugins: [require("tailwind-scrollbar-hide")],
};

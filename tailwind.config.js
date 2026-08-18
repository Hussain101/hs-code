/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				brand: {
					light: "#f8fafc",
					dark: "#0b0c0e", // Revset deep dark ground
					surface: "#121418", // Revset surface container
					card: "#16181d",
					border: "rgba(255, 255, 255, 0.08)",
					solid: "#ffffff",
					solidHover: "#e2e8f0",
					accent: "#22c55e", // Diff green +
					remove: "#ef4444", // Diff red -
					indigo: "#6366f1",
					cyan: "#06b6d4"
				},
				blue: {
					lighter: "#71c5ee",
					light: "#3182ce",
					normal: "#025091"
				},
				card: {
					dark: "rgba(18, 20, 24, 0.8)",
					light: "rgba(255, 255, 255, 0.85)"
				},
				badge: {
					dark: "rgba(255, 255, 255, 0.06)",
					light: "#F8F0E3"
				}
			},
			transitionTimingFunction: {
				"in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
				"out-back": "cubic-bezier(0.18, 0.89, 0.32, 1.28)"
			},
			transitionDuration: {
				DEFAULT: "300ms"
			},
			backgroundImage: {
				inherited: "inherit"
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".flex-center": {
					display: "flex",
					"align-items": "center",
					"justify-content": "center"
				}
			});
		}
	]
};

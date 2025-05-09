export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// Brand colors
				brand: {
					blue: "#2563eb", // Blue-600
					green: "#22c55e", // Green-500
					purple: "#8b5cf6", // Purple-500
				},
				// Neutral colors
				neutral: {
					background: "#f9fafb", // Gray-50
					card: "#ffffff",
					textPrimary: "#1f2937", // Gray-800
					textSecondary: "#6b7280", // Gray-500
				},
			},
			backgroundImage: {
				"hero-gradient":
					"linear-gradient(to right, #2563eb, #8b5cf6, #22c55e)",
			},
		},
	},
	plugins: [],
};

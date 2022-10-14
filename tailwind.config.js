/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: 'Poppins',
		},
		extend: {
			colors: {
				primary: '#1F5B2F',
			},
		},
	},
	plugins: [],
};

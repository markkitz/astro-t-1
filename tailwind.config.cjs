/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		extend: {
		colors: {
		  primary: 'rgb(79, 70, 229)',
		  secondary: '#ecc94b',
		  firewatch: '#fedcc8',
		}
	  },
	},
	plugins: [],
}

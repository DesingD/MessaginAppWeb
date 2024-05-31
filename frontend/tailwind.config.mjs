/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily:{
			"PlusJakarta": ["Plus Jakarta Sans", "sans-serif"],
		},
		extend: {
			colors:{
				// Tema 1
				cprimary: "#0086EA",
				cblack: "#0E1114",
				borderi: "#CDD5DE",
				tdescrip: "#616C76",
				dcolor: "#8FA0AF",

				// Tema 2
				bgColor: "#181C20",
				borderidark: "#4A545C",
				
			}
		},
	},
	plugins: [],
}

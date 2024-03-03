/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	
	theme: {
		fontSize: {
	  sm: '0.750rem',
	  base: '1rem',
	  xl: '1.333rem',
	  '2xl': '1.777rem',
	  '3xl': '2.369rem',
	  '4xl': '3.158rem',
	  '5xl': '4.210rem',
	},
	fontFamily: {
	  heading: 'Inter',
	  body: 'Poppins',
	},
	fontWeight: {
	  normal: '400',
	  bold: '700',
	},
		extend: {
		  colors: {
			'text': '#0d120e',
			'background': '#e0fae0',
			'primary': '#85FA73',
			'secondary': '#C1F1C0',
			'accent': '#2CBC29',
		  },
		},
	  },

	plugins: [],
}

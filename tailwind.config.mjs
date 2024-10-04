/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			'lato': ["Lato", "ui-system"],
			'lato-light': ["Lato-Light", "ui-system"],
			'cursive': ["cursive"],
		  },
		}
	  },
	plugins: [],
}

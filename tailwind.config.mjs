/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			'lato': ["Lato", "ui-system"],
			'lato-light': ["Lato-Light", "ui-system"],
		  },
		}
	  },
	plugins: [],
}

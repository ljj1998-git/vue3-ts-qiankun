import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
	typescript: {
		shim: false
	},
	css: ["@/assets/css/tailwind.css"],
	build: {
		postcss: {
		  postcssOptions: {
			plugins: {
			  tailwindcss: {},
			  autoprefixer: {},
			},
		  },
		},
	  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	router: {
		options: {
			strict: true
		}
	},
	css: ["~/assets/styles/main.scss"],
	postcss: {
		plugins: {
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	modules: ["@pinia/nuxt"]
});

// https://nuxt.com/docs/api/configuration/nuxt-config
// GitHub Token :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
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
	modules: [
		[
			"@pinia/nuxt",
			{
				autoImports: ["defineStore", "acceptHMRUpdate"]
			}
		],
		["nuxt-directus", { autoImports: ["useDirectusItems", "useDirectusItems"] }]
	],
	directus: {
		url: "http://45.93.139.231:8055",
		token: "yHA51mihI5JEInJ1PhWceNf2yEaEbDNe"
	},
	runtimeConfig: {
		apiSecret: "yHA51mihI5JEInJ1PhWceNf2yEaEbDNe",
		public: {
			apiBase: "http://45.93.139.231:8055"
		}
	}
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'nuxt-icon',
		'@nuxtjs/color-mode',
		'@nuxt/content',
		'@storyblok/nuxt',
		'@vueuse/nuxt',
		'@pinia/nuxt',
	],

	runtimeConfig: {
		mailerUser: '',
		mailerPass: '',
		mailerLog: '',
	},
	storyblok: {
		accessToken: process.env.STORYBLOK_TOKEN,
	},
	colorMode: {
		classSuffix: '',
		preference: 'system',
		fallback: 'dark',
	},
})

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
		'nuxt-vuefire',
	],

	vuefire: {
		config: {
			apiKey: process.env.FIREBASE_API_KEY,
			authDomain: process.env.FIREBASE_AUTH_DOMAIN,
			projectId: process.env.FIREBASE_PROJECT_ID,
			appId: process.env.FIREBASE_APP_ID,
		},
	},
	extends: ['nuxt-seo-kit'],
	runtimeConfig: {
		public: {
			siteUrl: 'https://www.maxino.dev',
			siteName: 'Maxwell Muanda | Portfolio Website',
			siteDescription: 'Welcome to my Digital Home, Portfolio & Blog',
		},
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
	app: {
		pageTransition: { name: 'fade', mode: 'out-in' },
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{
					name: 'google-site-verification',
					content: 'NZ2gcKbbjIC2NPIzsgOCzLX-IgB_3w9i6LUvAcc5pCU',
				},
			],
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
		},
	},
})

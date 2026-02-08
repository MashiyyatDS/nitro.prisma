import { defineNitroConfig } from 'nitropack/config'

// https://nitro.build/config
export default defineNitroConfig({
	compatibilityDate: 'latest',
	srcDir: 'server',
	imports: false,
	experimental: {
		websocket: true,
	},
	routeRules: {
		'/api/user': {
			headers: {
				'require-auth': 'true',
			},
		},
	},
	runtimeConfig: {
		app: {
			databaseURL: process.env.DB_URL,
		},
	},
})

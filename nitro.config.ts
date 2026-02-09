import { defineNitroConfig } from 'nitropack/config'

// https://nitro.build/config
export default defineNitroConfig({
	compatibilityDate: 'latest',
	srcDir: 'server',
	imports: false,
	experimental: {
		websocket: true,
		wasm: true,
	},
	runtimeConfig: {
		app: {
			databaseURL: process.env.DB_URL,
		},
	},
	preset: 'cloudflare-module',
	cloudflare: {
		deployConfig: true,
		nodeCompat: true,
	},
	rollupConfig: {
		external: ['pg-native', 'cloudflare:sockets'],
	},
	wasm: { lazy: true, esmImport: true },
})

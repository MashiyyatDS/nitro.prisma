import { defineEventHandler } from 'h3'

export default defineEventHandler(() => ({
	message: 'Congratulations',
	title: 'Nitro Prisma App Working In Cloudflare',
}))

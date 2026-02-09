import { defineEventHandler } from 'h3'
import usePrisma from '~/lib/prisma'

export default defineEventHandler(async () => {
	const permissions = await usePrisma().permission.findMany({
		select: {
			id: true,
			name: true,
			description: true,
		},
		orderBy: {
			id: 'desc',
		},
	})

	return { permissions }
})

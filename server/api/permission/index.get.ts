import { defineEventHandler } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
	const permissions = await prisma.permission.findMany({
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

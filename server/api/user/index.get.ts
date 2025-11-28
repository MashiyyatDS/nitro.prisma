import { defineEventHandler } from 'h3'
import prisma from '../../../lib/prisma'

export default defineEventHandler(async (event) => {
	const page = 1
	const limit = 5

	const [users, total] = await Promise.all([
		prisma.user.findMany({
			orderBy: { created_at: 'asc' },
			include: {
				posts: {
					select: {
						id: true,
						title: true,
						created_at: true,
					},
					take: 2,
				},
				roles: {
					select: {
						name: true,
					},
				},
			},
		}),
		prisma.user.count(),
	])

	prisma['user'].findMany({})

	return {
		users,
		total,
		limit,
	}
})

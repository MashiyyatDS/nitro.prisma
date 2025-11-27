import { defineEventHandler } from 'h3'
import prisma from '../../../lib/prisma'

export default defineEventHandler(async (event) => {
	const page = 1
	const limit = 5

	const [users, total] = await Promise.all([
		prisma.user.findMany({
			take: limit,
			skip: 1,
			orderBy: { created_at: 'desc' },
			include: {
				posts: {
					select: {
						id: true,
						title: true,
						created_at: true,
					},
					take: 2,
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

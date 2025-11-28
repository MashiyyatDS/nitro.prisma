//import { useCrypto } from '../../utils/utils'
import prisma from '../../../lib/prisma'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
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
				},
				roles: {
					select: { name: true },
				},
			},
		}),
		prisma.user.count(),
	])

	return {
		users,
		total,
	}
})

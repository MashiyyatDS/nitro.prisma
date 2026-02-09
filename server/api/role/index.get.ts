import { defineEventHandler } from 'h3'
import usePrisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const roles = await usePrisma().role.findMany({
		select: {
			id: true,
			name: true,
			description: true,
			permissions: {
				select: {
					id: true,
					name: true,
					description: true,
				},
			},
		},
		orderBy: {
			name: 'asc',
		},
	})

	return { roles }
})

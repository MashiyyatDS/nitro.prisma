import { defineEventHandler } from 'h3'
import prisma from '~/lib/prisma'
import { useCrypto } from '~/utils/utils'

export default defineEventHandler(async (event) => {
	const roles = await prisma.role.findMany({
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
	})

	return useCrypto().encrypt({ roles })
})

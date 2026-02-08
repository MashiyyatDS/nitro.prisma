import { Role } from 'generated/prisma/client'
import { defineEventHandler, readBody } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const payload: Role = await readBody(event)

	const role = await prisma.role.create({
		data: {
			...payload,
			permissions: {
				create: [
					{
						name: `Create ${payload.name}`,
						description: 'No Description',
					},
					{
						name: `Read ${payload.name}`,
						description: 'No Description',
					},
					{
						name: `Update ${payload.name}`,
						description: 'No Description',
					},
					{
						name: `Delete ${payload.name}`,
						description: 'No Description',
					},
				],
			},
		},
	})

	return {
		role,
	}
})

import { defineEventHandler, readBody } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const payload = await readBody(event)

	const role = await prisma.role.create({
		data: {
			name: 'Utility',
			description: '',
			permissions: {
				create: [
					{
						name: 'Create User',
						description: 'No Description',
					},
					{
						name: 'Read User',
						description: 'No Description',
					},
					{
						name: 'Update User',
						description: 'No Description',
					},
					{
						name: 'Delete User',
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

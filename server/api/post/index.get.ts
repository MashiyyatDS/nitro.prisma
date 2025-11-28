import { defineEventHandler } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const post = await prisma.post.findMany({
		orderBy: {
			id: 'asc',
		},
	})

	return {
		post,
	}
})

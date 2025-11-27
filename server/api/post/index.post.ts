import { defineEventHandler, readBody } from 'h3'
import prisma from '../../../lib/prisma'

export default defineEventHandler(async (event) => {
	const data = await readBody(event)

	const post = await prisma.post.createMany({
		data,
		skipDuplicates: false,
	})

	return {
		post,
	}
})

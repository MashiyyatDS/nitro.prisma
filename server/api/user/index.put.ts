import { defineEventHandler, readBody } from 'h3'
import prisma from '../../../lib/prisma'

export default defineEventHandler(async (event) => {
	const payload = await readBody(event)

	const user = await prisma.user.update({
		where: { id: payload.id },
		data: payload,
	})

	return {
		user,
	}
})

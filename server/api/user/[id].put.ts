import { defineEventHandler, getRouterParam, readBody } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const id = Number(getRouterParam(event, 'id'))

	if (!id || typeof id !== 'number') {
		throw 'Please provide a valid ID'
	}

	const data = await readBody(event)

	const user = await prisma.user.update({
		where: { id: id },
		data,
	})

	return user
})

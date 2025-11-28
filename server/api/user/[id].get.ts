import { defineEventHandler, getRouterParam } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const params = Number(getRouterParam(event, 'id'))

	if (!params || typeof params !== 'number') {
		throw 'Please provide a valid ID'
	}

	const user = await prisma.user.findFirst({
		where: { id: params },
	})

	return { user }
})

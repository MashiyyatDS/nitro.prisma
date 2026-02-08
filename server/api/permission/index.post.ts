import { defineEventHandler, readBody } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	const permission = await prisma.permission.create({
		data: body,
	})

	return { permission }
})

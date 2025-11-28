import { defineEventHandler, readBody } from 'h3'
import { User } from 'generated/prisma/client'
import { useHash } from '~/utils/utils'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
	const data: User = await readBody(event)
	data['password'] = await useHash().hash(data.password)

	const user = await prisma.user.update({
		data,
		where: { id: data.id },
		include: { roles: true },
	})

	return {
		user,
	}
})

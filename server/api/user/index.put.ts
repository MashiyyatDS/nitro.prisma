import { defineEventHandler, readBody } from 'h3'
import { User } from 'generated/prisma/client'
import prisma from '../../../lib/prisma'
import { useHash } from '../../utils/utils'

export default defineEventHandler(async (event) => {
	const data: User = await readBody(event)

	const user = await prisma.user.update({
		where: { id: data.id },
		data: {
			...data,
			password: useHash().create(data.password),
		},
		include: {
			roles: true,
		},
	})

	return {
		user,
	}
})

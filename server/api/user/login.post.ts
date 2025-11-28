import { defineEventHandler, readBody } from 'h3'
import prisma from '../../../lib/prisma'
import { useHash } from '../../utils/utils'

export default defineEventHandler(async (event) => {
	const data: { password: string; email: string } = await readBody(event)

	const user = await prisma.user.findFirst({
		where: {
			email: data.email,
		},
	})

	if (!user) {
		throw {
			message: 'User not found',
		}
	}

	const authenticated = useHash().check(data.password, user.password)
	if (authenticated) {
		/**
		 * Return necessary data only with roles and permissions.
		 * Return JWT Token for authentication,
		 */
		return { user }
	}

	throw {
		message: 'Invalid user credentials',
	}
})

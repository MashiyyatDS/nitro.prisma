import { defineEventHandler, readBody } from 'h3'
import prisma from '../../../lib/prisma'
import * as jose from 'jose'
import bcrypt from 'bcrypt'
import { z } from 'zod'

const schema = z.object({
	email: z.email('Email is required'),
	password: z.string().min(1, 'Password is required'),
})

export default defineEventHandler(async (event) => {
	const data: { password: string; email: string } = await readBody(event)

	const result = schema.safeParse(data)

	if (!result.success) {
		throw z.flattenError(result.error)
	}

	const user = await prisma.user.findFirstOrThrow({
		where: {
			email: data.email,
		},
		select: {
			first_name: true,
			middle_name: true,
			last_name: true,
			password: true,
			permissions: {
				select: {
					id: true,
					name: true,
				},
			},
			roles: {
				select: {
					name: true,
					permissions: {
						select: {
							id: true,
							name: true,
						},
					},
				},
			},
		},
	})

	const verified = await bcrypt.compare(data.password, user.password)

	if (!verified) {
		throw { message: 'Invalid user credentials' }
	}

	const secret = new TextEncoder().encode(process.env.ENC_KEY)
	const token = await new jose.SignJWT(user)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('30s')
		.sign(secret)

	return { token }
})

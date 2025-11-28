import { getHeader, createError, H3Event } from 'h3'
import { jwtVerify } from 'jose'

const jwtSecret = new TextEncoder().encode(process.env.ENC_KEY)

export default async function (event: H3Event) {
	const authHeader = getHeader(event, 'authorization')

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw createError({
			statusCode: 401,
			statusMessage: 'Unauthorized',
			message: 'Bearer token required',
		})
	}

	const token = authHeader.slice(7)

	try {
		const { payload } = await jwtVerify(token, jwtSecret, {})

		event.context.user = payload
	} catch (error) {
		let errorMessage = 'Invalid or expired token'

		if (error instanceof Error && error.name === 'JWTExpired') {
			errorMessage = 'Token has expired'
		}

		throw createError({
			statusCode: 401,
			statusMessage: 'Unauthorized',
			message: errorMessage,
		})
	}
}

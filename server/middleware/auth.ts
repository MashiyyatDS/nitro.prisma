import { defineEventHandler, getRequestURL } from 'h3'
import useVerifyToken from '~/utils/useVerifyToken'

export default defineEventHandler(async (event) => {
	if (getRequestURL(event).pathname.startsWith('/api/user')) {
		//await useVerifyToken(event)
	}
})

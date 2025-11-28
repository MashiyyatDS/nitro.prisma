import { defineEventHandler, getRequestURL } from 'h3'
import useVerifyToken from '~/utils/useVerifyToken'

//const authenticatedRoutes = [
//	'/api/user',
//	'/api/role',
//	'/api/permission',
//	'/api/post',
//	'/api/comment',
//]
export default defineEventHandler(async (event) => {
	if (getRequestURL(event).pathname.startsWith('/api/user')) {
		await useVerifyToken(event)
	}
})

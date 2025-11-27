import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client'
import { z } from 'zod'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })

export const UserCreateInput = z.object({
	first_name: z.string().min(2).max(100),
	last_name: z.string().min(2).max(100),
	email: z.string().min(2).max(100),
	password: z.string().min(6).max(100),
})

const prisma = new PrismaClient({ adapter }).$extends({
	query: {
		user: {
			create({ args, query }) {
				args.data = UserCreateInput.parse(args.data)
				return query(args)
			},
		},
	},
})

export default prisma

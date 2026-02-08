import { PrismaClient } from '../../generated/prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { z } from 'zod'
import 'dotenv/config'

export const UserCreateInput = z.object({
	first_name: z.string().min(2).max(100),
	last_name: z.string().min(2).max(100),
	email: z.string().min(2).max(100),
	password: z.string().min(6).max(100),
})

const adapter = new PrismaMariaDb({
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT) ?? 3306,
	password: process.env.DB_PASSWORD,
	user: process.env.DB_USER,
	database: process.env.DB_NAME,
})

const prisma = new PrismaClient({ adapter }).$extends({
	query: {
		user: {
			create({ args, query }) {
				args.data = UserCreateInput.parse(args.data)
				return query(args)
			},
		},
		post: {
			findMany({ args, query }) {
				args.where = { ...args.where, deleted_at: null }
				return query(args)
			},
		},
	},
})

export default prisma

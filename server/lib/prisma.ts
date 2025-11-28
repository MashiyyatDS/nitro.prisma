import 'dotenv/config'
//import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '../../generated/prisma/client'
import { z } from 'zod'

const connectionString = `${process.env.DATABASE_URL}`

export const UserCreateInput = z.object({
	first_name: z.string().min(2).max(100),
	last_name: z.string().min(2).max(100),
	email: z.string().min(2).max(100),
	password: z.string().min(6).max(100),
})

//const adapter = new PrismaPg({ connectionString })

const adapter = new PrismaMariaDb({
	host: '127.0.0.1',
	port: 3306,
	password: '',
	user: 'root',
	database: 'nitro_prisma',
	connectionLimit: 5,
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

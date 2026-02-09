import { PrismaClient } from '../../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

export default function usePrisma() {
	const connectionString = `${process.env.DB_URL}`

	const adapter = new PrismaPg({
		connectionString,
	})

	const prisma = new PrismaClient({ adapter })

	return prisma
}

import { PrismaClient } from '../../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

export default function usePrisma() {
	const connectionString = `postgres://e6fc40930c12f122cfa876caae3d4072923a4cdc1bbcd86c50d64952ed86397e:sk_bsFKpT4WKYZymFfX8ZcK5@db.prisma.io:5432/postgres?sslmode=require`

	const adapter = new PrismaPg({
		connectionString,
	})

	const prisma = new PrismaClient({ adapter })

	return prisma
}

import { PrismaClient } from '../../generated/prisma/client'
import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = `postgresql://postgres:password@localhost:5432/nitro_prisma`

//const connectionString = `${process.env.DB_URL}`
const adapter = new PrismaPg({
	connectionString,
})

const prisma = new PrismaClient({ adapter })

export default prisma

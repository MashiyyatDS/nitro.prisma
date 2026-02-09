import 'dotenv/config'
import { defineConfig } from 'prisma/config'

const url = `postgres://e6fc40930c12f122cfa876caae3d4072923a4cdc1bbcd86c50d64952ed86397e:sk_bsFKpT4WKYZymFfX8ZcK5@db.prisma.io:5432/postgres?sslmode=require`

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: {
		path: 'prisma/migrations',
	},
	datasource: {
		url,
	},
})

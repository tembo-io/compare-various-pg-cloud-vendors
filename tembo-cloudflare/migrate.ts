import { config } from 'dotenv'

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres';

config({ path: '.dev.vars' })

const connection = postgres({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT!),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: true
})
const db = drizzle(connection)
const main = async () => {
  await migrate(db, { migrationsFolder: 'drizzle' })
  console.log('migrated')

  process.exit(0)
}
main()

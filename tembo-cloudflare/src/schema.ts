import { pgTable, timestamp, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text('email').notNull(),
  name: text('name'),
  createdAt: timestamp('created_at').notNull().defaultNow()
});

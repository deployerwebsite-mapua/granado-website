import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { relations } from 'drizzle-orm';

export const clientTable = pgTable("clientTable", {
    client_id: integer().notNull().primaryKey().unique(),
    client_name: varchar().notNull(),
    client_email: varchar().notNull()
})

export const bookingTable = pgTable("bookingTable", {
    booking_id: integer().notNull().primaryKey().unique(),
    client_id: integer().notNull(),
    client_name: varchar().notNull(),
    appointment_date: timestamp().notNull()
})

export const portfolioOutfitsTable = pgTable("portfolioItemsTable", {
    outfit_id: integer().notNull().primaryKey().unique(),
    outfit_name: varchar().notNull(),
    outfit_description: varchar().notNull(),
    outfit_url: varchar().notNull()
})

export const bookingRelations = relations(bookingTable, ({one}) => ({
    client: one(clientTable, {
        fields: [bookingTable.client_id],
        references: [clientTable.client_id],
    }),
}));
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("transactions", (table) => {
    table.decimal("amount", 10, 2).notNullable().alter();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("transactions", (table) => {
    table
      .decimal("amount", 10, 2)
      .notNullable()
      .defaultTo(knex.fn.now())
      .alter();
  });
}

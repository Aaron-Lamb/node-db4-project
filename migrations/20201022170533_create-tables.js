
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("recipeName").notNull()
  })

  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.float("amount").notNull()
  })

  await knex.schema.createTable("steps", (table) => {
      table.increments("step_id")
      table.integer("step_number").notNull()
      table.text("instructions").notNull()
      table.integer("recipe_id")
        .notNull()
        .references("id")
        .inTable("recipes")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
  })

  await knex.schema.createTable("recipe_ingredients", (table) => {
    table.integer("recipe_id")
        .notNull()
        .references("id")
        .inTable("recipes")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
    table.integer("ingredient_id")
        .notNull()
        .references("id")
        .inTable("ingredients")
        .onDelete("SET NULL")
        .onUpdate("CASCADE")
    table.primary(["recipe_id", "ingredient_id"])
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};

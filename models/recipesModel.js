const database = require("../data/config");

function getRecipes() {
    return database.select('*').from("recipes")
}

function getShoppingList(recipe_id){
    return database("recipe_ingredients as ri")
    .innerJoin("recipes as r", "r.id", "ri.recipe_id")
    .innerJoin("ingredients as i", "i.id", "ri.ingredient_id")
    .where("r.id", recipe_id)
    .select([
        "r.recipeName",
        "i.name",
        "i.amount"
    ])
}

function getInstructions(recipe_id){
    return database("steps as s")
    .innerJoin("recipes as r", "r.id", "s.recipe_id")
    .where("r.id", recipe_id)
    .select([
        "s.step_number",
        "s.instructions",
        "r.recipeName"
    ])
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
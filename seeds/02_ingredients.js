
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "Eggs", amount: 3},
    {name: "Bacon sliced", amount: 3},
    {name: "Tablespoon of butter", amount: 1},
    {name: "Salt and Pepper", amount: 0.32}
  ])
};

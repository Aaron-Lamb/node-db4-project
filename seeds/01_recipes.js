
exports.seed = async function(knex) {
      return knex('recipes').insert([
        {recipeName: "Bacon"},
        {recipeName: "Fried eggs"},
        {recipeName: "Scrambled eggs"}
      ]);
};

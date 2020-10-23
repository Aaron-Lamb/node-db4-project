
exports.seed = function(knex) {
      return knex('steps').insert([
        {step_number: 1, instructions: 'Break eggs into bowl, salt and pepper', recipe_id: 3},
        {step_number: 2, instructions: 'Pour into buttered hot pan', recipe_id: 3},
        {step_number: 3, instructions: 'Stir until cooked and serve', recipe_id: 3},
        {step_number: 1, instructions: 'Place bacon in hot pan', recipe_id: 1},
        {step_number: 2, instructions: 'Flip every few minutes until cooked', recipe_id: 1},
        {step_number: 1, instructions: 'Break eggs into buttered pan, salt and pepper', recipe_id: 2},
        {step_number: 2, instructions: 'Flip when whites are cooked and leave for 1 minute', recipe_id: 2},
        {step_number: 3, instructions: 'Roll onto plate, bread, or other method of eating.', recipe_id: 2}
      ]);
};

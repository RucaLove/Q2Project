
exports.up = function(knex) {
  return knex.schema.createTable('user_saved_matches', (table) => {
  table.increments();
  table.integer('user_id').notNullable().references('users.id');
  table.integer('match_id').notNullable().references('users.id');
  table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_saved_matches');
};

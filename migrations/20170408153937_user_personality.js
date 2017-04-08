
exports.up = function(knex) {
  return knex.schema.createTable('user_personality', (table) => {
  table.increments();
  table.integer('user_id').notNullable().references('users.id');
  table.string('personality', 4).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_personality');
};

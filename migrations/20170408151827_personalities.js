
exports.up = function(knex) {
  return knex.schema.createTable('personalities', (table) => {
  table.increments();
  table.string('type', 4).notNullable().defaultTo('');
  table.text('description').notNullable().defaultTo('');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('personalities');
};


exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('first_name').notNullable().defaultTo('');
  table.string('last_name').notNullable().defaultTo('');
  table.string('email').notNullable().unique();
  table.specificType('hashed_password', 'char(60)').notNullable();
  table.integer('gender').notNullable();
  table.integer('looking_for');
  table.text('bio').defaultTo('');
  table.string('usr_name').notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

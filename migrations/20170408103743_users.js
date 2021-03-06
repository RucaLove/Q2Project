// notNullable() on usr_profile
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
  table.increments();
  table.string('first_name').notNullable().defaultTo('');
  table.string('last_name').notNullable().defaultTo('');
  table.string('email').notNullable().unique();
  table.specificType('hashed_password', 'char(255)').notNullable();
  table.integer('gender').notNullable();
  table.integer('age').notNullable();
  table.boolean('looking_for');
  table.integer('interested_in');
  table.text('bio').defaultTo('');
  table.string('usr_name').notNullable().unique();
  table.float('lat').notNullable().defaultTo(40.0150);
  table.float('long').notNullable().defaultTo(-105.2705);
  table.text('photo');
  table.text('photo2');
  table.text('photo3');
  table.text('photo4');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

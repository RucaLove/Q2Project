
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
        id: 1,
        first_name: 'Sam',
        last_name: 'Miller',
        email: 'sammzamm01@gmail.com ',
        hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
        gender: 1,
        looking_for: 2,
        bio: 'I am Sam. I like climbing.',
        usr_name: 'SammZamm'
      }
      id: 1,
      first_name: 'Haley',
      last_name: 'Kalb',
      email: 'haley.kalb@gmail.com ',
      hashed_password: '$4a$90$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      gender: 1,
      looking_for: 1,
      bio: '',
      usr_name: 'RucaLove'
    }
    ]);
    })
    .then(() => {
  return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
})
};


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
        age: 28,
        looking_for: true,
        interested_in: 2,
        bio: 'I am Sam. I like climbing.',
        usr_name: 'SammZamm',
        lat: 40.068337,
        long: -105.1820337,
        photo: 'https://www.facebook.com/photo.php?fbid=10209718362210655&set=t.1078410022&type=3&theater'
      },
      {
      id: 2,
      first_name: 'Haley',
      last_name: 'Kalb',
      email: 'haley.kalb@gmail.com ',
      hashed_password: '$4a$90$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
      gender: 1,
      age: 34,
      looking_for: false,
      interested_in: 1,
      bio: 'I am the most amazing.',
      usr_name: 'RucaLove',
      lat: 40.0228514,
      long: -105.2544565,
      photo: 'https://www.facebook.com/photo.php?fbid=10103928666203455&set=a.806490888855.2461131.22426940&type=3&theater'
    }
    ]);
    })
    .then(() => {
  return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
})
};

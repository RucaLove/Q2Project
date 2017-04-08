
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_saved_matches').del()
    .then(function () {
      return knex('user_saved_matches').insert([
        {
        id: 1,
        user_id: 1,
        match_id: 2
      },
      {
        id: 2,
        user_id: 2,
        match_id: 1
      }
    ]);
    })
    .then(() => {
  return knex.raw("SELECT setval('user_saved_matches_id_seq', (SELECT MAX(id) FROM user_saved_matches))");
})
};

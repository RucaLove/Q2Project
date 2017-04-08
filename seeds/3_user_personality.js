
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_personality').del()
    .then(function () {
      return knex('user_personality').insert([
      {
        id: 1,
        user_id: 1,
        personality: 'ISTJ'
      },
      {
      id: 2,
      user_id: 2,
      personality: 'ENTP'
      }
    ]);
    })
    .then(() => {
  return knex.raw("SELECT setval('user_personality_id_seq', (SELECT MAX(id) FROM user_personality))");
})
};

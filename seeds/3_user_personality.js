
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
          personality: 'ENFJ'
        },
        {
          id: 3,
          user_id: 3,
          personality: 'ENTP'
        },
        {
          id: 4,
          user_id: 4,
          personality: 'ESTP'
        },
        {
          id: 5,
          user_id: 5,
          personality: 'ESFP'
        },
        {
          id: 6,
          user_id: 6,
          personality: 'INFP'
        },
        {
          id: 7,
          user_id: 7,
          personality: 'ESTP'
        },
        {
          id: 8,
          user_id: 8,
          personality: 'INFP'
        },
        {
          id: 9,
          user_id: 9,
          personality: 'ESTP'
        },
        {
          id: 10,
          user_id: 10,
          personality: 'ESTP'
        }
      ]);
    })
    .then(() => {
  return knex.raw("SELECT setval('user_personality_id_seq', (SELECT MAX(id) FROM user_personality))");
})
};

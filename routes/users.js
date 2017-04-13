var express = require('express');
var router = express.Router();
var knex = require('../knex');
const humps = require('humps')
/* GET users listing. */
// read all users
router.get('/', function(req, res, next) {

  // we still need to render their user_id somewhere on the page
  knex('users')
  .join('user_personality', 'users.id', 'user_personality.user_id')
    .then((user) => {
      let camelUser = humps.camelizeKeys(user)
      res.render('browse', {user: camelUser});
    })
});

router.get('/:id', (req, res, next) => {
  let id = +req.params.id

  knex('users')
  .join('user_personality', 'users.id', 'user_personality.user_id')
    .where('users.id', id)
    .then(user => {
      let userHumps = humps.camelizeKeys(user[0])

      res.render('detail_view', {
        id: userHumps.id,
        username: userHumps.usrName,
        photo: userHumps.photo,
        photo2: userHumps.photo2,
        photo3: userHumps.photo3,
        photo4: userHumps.photo4,
        age: userHumps.age,
        bio: userHumps.bio,
        personality: userHumps.personality
      })
    })
  // for viewing users and a patch to editing
  // you can for now always see anyone's profile

  // if profile id number matches cookie id number
  // display buttons for edit


})

router.put('/', (req, res, next) => {
  // if user has correct cookie allow them to PUT

})

router.delete('/:id', (req, res, next) => {
  // check for matching cookie id again
  // allow them to delete

})



module.exports = router;

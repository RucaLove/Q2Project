var express = require('express');
var router = express.Router();
var knex = require('../knex');
const humps = require('humps')
/* GET users listing. */
// read all users
router.get('/', function(req, res, next) {
  let count = 0



  // we still need to render their user_id somewhere on the page
  knex('users')
  .join('user_personality', 'users.id', 'user_personality.user_id')
    .then((user) => {
      console.log(user);
      res.render('browse', {
        id: user[1].id,
        age: user[1].age,
        username: user[1].usr_name,
        photo: user[1].photo,
        personality: user[1].personality
      });
    })

});

router.get('/:id', (req, res, next) => {
  let id = +req.params.id

  knex('users')
  .join('user_personality', 'users.id', 'user_personality.user_id')
    .where('users.id', id)
    .then(user => {
      console.log(user);
      let userHumps = humps.camelizeKeys(user[0])

      res.render('detail_view', {
        id: userHumps.id,
        username: userHumps.usrName,
        photo: userHumps.photo,
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

router.post('/:id', (req, res, next) => {


  // check for matching cookie id and new user cookie
  // if they have both let them create a profile

  // after they create the profile successfully
  // we need to delete the newUSer cookie so they can only make one

  // if no cookie-res.render users-browsing view
})

router.put('/', (req, res, next) => {
  // if user has correct cookie allow them to PUT

})

router.delete('/:id', (req, res, next) => {
  // check for matching cookie id again
  // allow them to delete

})



module.exports = router;

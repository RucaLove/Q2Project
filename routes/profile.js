const express = require('express');
const router = express.Router();
const knex = require('../knex')
const humps = require('humps')
const boom = require('boom')

router.get('/', function(req, res, next) {
  
  let personality = req.cookies.newUserPersonality.personality
      res.render('user_profile', { personality: personality })
      // console.log('cookies', req.cookies);
      // console.log(req.cookies.newUserPersonality);
})


  // NOTE if new user cookie exists this will be a patch

router.get('/:id', (req, res, next) => {
  let id = +req.params.id
  // this one needs to go into the DB to get the info
  // set a cookie with the user personality
  // this cookie also needs to say they are a new user

  // NOTE think about transition from first time user making profile to here and how info gets passed on. cookie?
  knex('users')
  .join('user_personality', 'users.id', 'user_personality.user_id')
  .where('users.id', id)
  .then(user => {
    console.log(user);
    //not currently rendering age
      res.render('profile_view', {age: user[0].age, bio: user[0].bio, photos: user[0].photos, personality: user[0].personality})
  })

// router.post('/', (req, res, next) => {
//   knex('users')
//   .insert {
//     .returning(["id", "first_name", "last_name", "email", "hashed_password", "gender", "age", "bio", "usr_name", "photo"])
//   }
//   knex('user_personality')
// })


  // PROBABLY DON'T NEED THIS
  // knex('user_personality')
  //   .orderBy('id', req.params.id)
  //   .then((personality) => {
  //     res.send(humps.camelizeKeys(personality[0]));
  //     console.log('HAY', personality);
  //   })
  // res.render('user_profile')
})

router.post('/:id', (req, res, next) => {
// so we post to the DB
// it goes into the database
// now we need to put their new id into the url
// then they need to go to their profile for real

  res.render('profile_view', { userData: userData })
})

router.patch('/:id', (req, res, next) => {


})

// can the transition button be static? or does it need to post?
// we are only setting a cookie

module.exports = router;

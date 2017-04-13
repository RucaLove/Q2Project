const express = require('express');
const router = express.Router();
const knex = require('../knex')
const humps = require('humps')
const boom = require('boom')

router.get('/', function(req, res, next) {

  res.render('user_profile')

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
    .then(function(user) {
      // console.log(user);
      //not currently rendering age
      let registeredUser = humps.camelizeKeys(user[0])
      console.log(registeredUser);
      res.render('profile_view', {
        // id: registeredUser.id,
        age: registeredUser.age,
        bio: registeredUser.bio,
        photos: registeredUser.photos,
        personality: registeredUser.personality
      })
    })
})

router.post('/', (req, res, next) => {
  console.log("COOKIE", req.cookies.newUser);
  let userEmail =  req.cookies.newUser.email
  console.log(userEmail);

  knex('users')
    .insert([{
      first_name: 'Sara',
      last_name: 'Fake',
      email: 'fake2@gmail.com',
      hashed_password: 'HHHWKedjkbakfbzjb7834684765984659348y',
      gender: 2,
      age: 89,
      bio: 'I love chemistri.',
      usr_name: 'FakeFace2',
      photo: 'http://girlsgonewise.com/wp-content/uploads/2011/11/grumpy-old-lady.jpg'
    }], '*')
    .then((newUser) => {
      console.log(newUser);
      knex('user_personality')
        .insert([{
          user_id: newUser[0].id,
          personality: 'ISTJ'
        }], '*')
        .then((newUserPersonality) => {
          // this was `/users/{newUser[0].id}` before
          res.redirect(`/profile/${newUser[0].id}`)
        })
    })
})

router.patch('/:id', (req, res, next) => {
  let id = +req.params.id
  console.log('ID', id, typeof id);
  let age = +req.body.age
  console.log('age', age);
  let bio = req.body.bio
  console.log('bio', bio);

  if (bio !== "") {
    knex('users')
      .where('id', `${id}`)
      .update({
        age: age,
        bio: bio
      })
      .returning('*')
      .then(update => {
        console.log('update', update);
        res.json(true)
      })
      .catch(err => {
        console.log('error when both defined', err);
      })
  } else {
    res.json(false)
  }
})

// can the transition button be static? or does it need to post?
// we are only setting a cookie

module.exports = router;

var express = require('express');
var router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  // let id = +req.params.id
  knex('users')
  .join('user_personality', 'users.id', 'user_personality.user_id')
  .where('users.id', 1)
  .then(user => {
    res.cookie('newUserPersonality', { personality: user[0].personality }, { httpOnly:true })
    res.render('user_personality', { personality: user[0].personality })
  })
})

// router.post('/', function(req, res, next) {
//
// })

// // login with Oauth
// router.post('/', (req, res, next) => {
//   console.log(req.body)
//   // Oauth: Facebook
//   knex('users')
//     .where('email', req.body.email)
//     .then(function(user){
//       if (!user[0]) {
//         //  --this logic tells us user is 'newUser'
//         // set cookie here
//         // res.cookie('newUser', 'hey')
//         res.cookie('newUser', {new: true, email: req.body.email, token: req.body.token}, {httpOnly:true})
//         res.json(true);
//       } else {
//         // if user has registered: filled out a profile on our app, then we store the following info:
//         console.log('else\n\n');
//         res.cookie('regUser', {new: false, id: user[0].id}, {httpOnly:true})
//         res.json(false)
//       }
//     })
// })

module.exports = router;

var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')
var knex = require('../knex')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chemistri' });

})

// login with Oauth
router.post('/', (req, res, next) => {
  // Oauth: Facebook
  knex('users')
    .where('email', req.body.email)
    .then(function(user){
      if (!user[0]) {
        //  --this logic tells us user is 'newUser'
        // set cookie here
        res.cookie('newUser', {new: true, email: req.body.email, password: req.body.token}, {httpOnly:true})
        res.json(true);
      } else {
        // if user has registered: filled out a profile on our app, then we store the following info:
        console.log('else\n\n');
        res.cookie('regUser', {new: false, id: user[0].id}, {httpOnly:true})
        res.json(false)
      }
    })
})

// NOTE:SEE IF THIS ONE CAN JUST BE AN HERF LINK W/N THE HTML
// router.post('/create', (req, res, next) => {
//   // set the cookie
//   res.redirect('/test')
// })

module.exports = router;

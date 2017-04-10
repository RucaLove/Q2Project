var express = require('express');
var router = express.Router();

var knex = require('../knex')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chemistri' });

})

// login with Oauth
router.post('/', (req, res, next) => {
  // console.log(req.body);

  knex('users')
    .where('email', req.body.email)
    .then(function(user){
      if (!user[0]) {
        // set cookie here
        res.cookie('newUser', {email: req.body.email, token: req.body.token}, {httpOnly:true})
        res.json(true)
      }
    })


  // Oauth
  // res.redirect('/matches')
})

// NOTE:SEE IF THIS ONE CAN JUST BE AN HERF LINK W/N THE HTML
// router.post('/create', (req, res, next) => {
//   // set the cookie
//   res.redirect('/test')
// })

module.exports = router;

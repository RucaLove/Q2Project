var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chemistri' });
})


// login without Oauth
router.post('/login', (req, res, next) => {
  // set cookie here
  // the name of object can be changed
  res.redirect('/matches')
})

// login with Oauth
router.post('/facebook', (req, res, next) => {
  // set cookie here
  // Oauth
  res.redirect('/matches')
})

// NOTE:SEE IF THIS ONE CAN JUST BE AN HERF LINK W/N THE HTML
// router.post('/create', (req, res, next) => {
//   // set the cookie
//   res.redirect('/test')
// })

module.exports = router;

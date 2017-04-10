var express = require('express');
var router = express.Router();
var http = require('http')
var bodyParser = require('body-parser')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chemistri' });

})

// login with Oauth
router.post('/', (req, res, next) => {
  console.log(req.body);
  

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

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let err = new Error('Unauthorized')
  // render the error page
  res.status(401);
  res.render('error', {message: 'not allowed'});
})

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', (req, res, next) => {
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
})

router.put('/', (req, res, next) => {
  // if user has correct cookie allow them to PUT

})

router.delete('/:id', (req, res, next) => {
  // check for matching cookie id again
  // allow them to delete

})



module.exports = router;

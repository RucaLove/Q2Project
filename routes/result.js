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

module.exports = router;

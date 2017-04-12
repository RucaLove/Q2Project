var express = require('express');
var router = express.Router();
const knex = require('../knex')
const humps = require('humps')
const boom = require('boom')

function admin(req, res, next) {
  // if (!req.cookies.isAdmin) {
  //   boom.unauthorized('not for you')
  //   res.render('error')
  // } else {
    next()
  // }
}

//render users table
router.get('/', admin, function(req, res, next) {
  knex('users')
  .returning('first_name', 'last_name', 'usr-name', 'id', 'email')
  .orderBy('id', 'asc')
  .then(users => {
    let adminUsers = humps.camelizeKeys(users)

    res.render('admin', {users: adminUsers});
  })

})

router.delete('/', admin, (req, res, next) => {
  let id = +req.body.userId
  console.log("DELETE ID", id);

  knex('users')
  .where('id', id)
  .del()
  .then(gone => {
        console.log('deleted', gone)
      res.json(true)

  })
  .catch(err => {
    console.log(err);
    res.json(false)
  })

})

module.exports = router;

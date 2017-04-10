var express = require('express');
var router = express.Router();
const knex = require('../knex')

router.get('/', (req, res, next) => {
  // will display test
  // res.render(test page view)

})

router.post('/', (req, res, next) => {
  // this will post to database with users personality result
  // this is a stretch. we don't have access to test yet

  res.redirect('/personalities/:id')
})

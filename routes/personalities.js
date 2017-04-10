const express = require('express');
const router = express.Router();
const knex = require('../knex')
const humps = require('humps')
const boom = require('boom')


router.get('/:id', (req, res, next) => {
  // this one needs to go into the DB to get the info
  // set a cookie with the user personality
  // this cookie also needs to say they are a new user
  //
  res.render('personalities', {yourPersonality: personality})
})

// can the transition button be static? or does it need to post?
// we are only setting a cookie

module.exports = router;

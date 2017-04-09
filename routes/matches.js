var express = require('express');
var router = express.Router();
const knex = require('../knex')

// this one is to render the whole matches page
router.get('/', (req, res, next) => {

  // confirm match view has correct name
  res.render('matches')
})

// this one is for viewing a single matches profile
router.get('/:id', (req, res, next) => {
  // each match name needs to be rendered with an id in hbs
  // can get that info with an event listener

  res.redirect(`/users/${id}`)
})

// can this be an AJAX post request from the check-mark button to here?
router.post('/:id', (req, res, next) => {
  // put chosen match in user_saved_matches table
  // get the user_id from the cookie
  // get the match_id from the request body



})

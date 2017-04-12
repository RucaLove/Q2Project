const express = require('express');
const router = express.Router();
const knex = require('../knex')
const humps = require('humps')
const boom = require('boom')


// pretty sure we need to delete this
router.get('/', function(req, res, next){
  // render questions and answers on test.hbs

})




router.post('/', function(req, res, next){

    // ajax POSTs test result to this route and we add 'result' to cookie
    //res.cookie('')

})

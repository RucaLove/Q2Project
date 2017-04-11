const express = require('express');
const router = express.Router();
const knex = require('../knex')
const humps = require('humps')
const boom = require('boom')



router.get('/', function(req, res, next){
res.render('test');

})




router.post('/', function(req, res, next){

    // ajax POSTs test result to this route and we add 'result' to cookie
    //res.cookie('')

})

module.exports = router;

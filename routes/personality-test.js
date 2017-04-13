var express = require('express');
var router = express.Router();
const knex = require('../knex')
const cookieParser = require('cookie-parser')
const humps = require('humps')

router.get('/', (req, res, next) => {

    if (!req.cookies.newUser) {

        console.log('Welcome existing user\n', req.cookies.regUser.name);

        knex('users')
            .select('id')
            .where('email', req.cookies.regUser.email)
            .then(function(idArr) {
                let userid = humps.camelizeKeys(idArr[0].id)
                console.log(userid);
                let userName = req.cookies.regUser.name
                let testStatus = 'Go to profile'
                res.render('test', {
                    name: req.cookies.regUser.name,
                    message: 'Welcome back: ',
                    testStatus: testStatus,
                    userid: userid
                })
            })

    } else {
        console.log('Welcome new user!\n', req.cookies.newUser);
        res.render('test', {
            name: req.cookies.regUser.name,
            message: 'Welcome: '
        });
    }
})


router.post('/', (req, res, next) => {
    // this will post to database with users personality result
    // this is a stretch. we don't have access to test yet

    res.redirect('/result')
})

module.exports = router;

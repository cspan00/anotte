require('dotenv').load();
var express = require('express');
var knex = require('../db/knex');
var bcrypt = require('bcrypt')
var router = express.Router();
var saltRounds = 10;
var jwt = require('jsonwebtoken')


function users(){
  return knex('users')
}


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.redirect('www.google.com');
// });

router.post('/auth', function (req, res, next){
  knex.select('password').from('users').then(function(result, plain){
    var plain = req.body.password;
    var hash = result[0].password;
    bcrypt.compare(plain, hash, function(err, res){
      if(res === true){
        req.session.user = "user";
        console.log("success");
        console.log(req.session.id);
      }
      else{
        console.log("fail");
      }
    })

  })
});






router.get('/logout', function(req,res,next){
  req.session.destroy(function(err) {
      console.log("session destroyed!");
      // console.log(req.session.id);
    })
  res.redirect('/#/admin')
})


// router.post('/create', function(req,res,next){
//   bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//      var password = {};
//      password.password = hash;
//      users().insert(password).then(function(result){
//        res.send('password inserted')
// //      })
//
//  //
//  // });
// })


module.exports = router;

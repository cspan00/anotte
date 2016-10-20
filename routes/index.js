require('dotenv').load();
var express = require('express');
var knex = require('../db/knex');
var bcrypt = require('bcrypt')
var router = express.Router();
var saltRounds = 10;
var jwt = require('jsonwebtoken');
var cloudinary = require('cloudinary');
var fs = require('fs')
var multer = require('multer')
var upload = multer({dest: './'})



function events(){
  return knex('events')
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,

});


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.redirect('www.google.com');
// });

router.post('/auth', function (req, res, next){
  knex.select('password').from('users').then(function(result, plain){
    var plain = req.body.password;
    var hash = result[0].password;
    var username = req.body.username
    bcrypt.compare(plain, hash, function(err, res){
      if(res === true){
        req.session.user = username;
        console.log("success");
        console.log(req.session.id);
      }
      else{
        console.log("fail");
      }
    })

  })
});

router.post('/new', upload.single('file'), function(req, res, next){
    console.log(req.body);
    cloudinary.uploader.upload(req.file.filename, function(result){
    var events = {};
    events.title = req.body.title;
    events.description = req.body.description;
    events.date = req.body.date;
    events.ticket_link = req.body.ticket_link;
    events.past = req.body.past;
    events.event_photo = result.secure_url;
    knex('events').insert(events).then(function(result){
      console.log("success");
      res.redirect('/#/create_event')
    })
    fs.unlink('./' + req.file.filename)
})

});


router.get('/current/events', function (req,res,next){
  knex('events').where('past', false).then(function(result){
    res.send(result)
  })
})


router.post('/modify', function (req,res,next){
  console.log(req.body);
  res.redirect('/#/create_event')
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

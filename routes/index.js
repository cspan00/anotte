var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('www.google.com');
});

router.get('5FF', function(req, res, next){
  res.render('../pages/5FF.html')
})

module.exports = router;

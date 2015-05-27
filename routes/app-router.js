var express = require('express');
var router = express.Router();

router.get('/', function(require, response) {
  response.render('calendres/index');
});

module.exports = router;
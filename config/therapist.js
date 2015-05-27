var app = require('express')();
var logger = require('morgan');


var therapist = function() {
  console.log('Listening on port ' + 3000 + '\n\nI promise.');
  setInterval(function() {console.log('I\'m still listening')}, 10000);
  setInterval(function() {console.log('I am always listening')}, 100000);
  setInterval(function() {console.log('I am a good listener')}, 100000);
  setInterval(function() {console.log('I LISTEN THE BEST')}, 100000);
  setInterval(function() {console.log('That\'ll be $900, I will bill you.')}, 300000);
};

module.exports = therapist();
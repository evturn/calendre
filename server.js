var express = require('express');
var app 		= express();
var logger  = require('morgan');

app.use(logger('dev'));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

app.get('/', function(require, response) {
	response.render('index.html');
});

app.listen(app.get('port'), function() {
	console.log('Express listening on http://localhost:' + app.get('port') + '\n\nI promise.\n');
});
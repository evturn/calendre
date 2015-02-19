var express = require('express');
var app = express();


app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

app.get('/', function(require, response) {
	response.render('index.html');
});


app.listen(app.get('port'), function() {
	console.log('Express listening on http://localhost:' + app.get('port'));
});
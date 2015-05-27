var express   = require('express');
var logger    = require('morgan');
var appRouter = require('./routes/app-router');
var root      = __dirname + '/public';
var app 		  = express();

app.use(express.static(root));
app.use(logger('dev'));


app.use('/', appRouter);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
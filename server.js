var express   = require('express');
var logger    = require('morgan');
var appRouter = require('./routes/app-router');
var hbs       = require('./config/handlebars');
var therapist = require('./config/therapist');
var root      = __dirname + '/public';

var app       = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);

app.use(express.static(root));
app.use(logger('dev'));

app.use('/', appRouter);
app.listen(3000, therapist);
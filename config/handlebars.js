var handlebars = require('express-handlebars');

var viewDirectories = [
  'views/layouts',
  'views/partials'
];

var hbs = handlebars.create({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: viewDirectories
})

module.exports = hbs;
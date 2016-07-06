var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var request = require('request');
var router = require('./routes.js');

var app = express();

app.get('/', function(req, res) {
  res.send('This is our express server');
});

app.listen(3000, function() {
  console.log('this is our express server');
});

// app.set('port', 3000)
app.use('/namesandplaces', router);
app.use(morgan('dev'));
app.use(parser.json());

// request({
//   method: 'POST',
//   uri: 'http://127.0.0.1:3000/namesandplaces/names',
//   json: {
//     name: 'jeremy'
//   }
// });

// request({
//   method: 'GET',
//   uri: 'http://127.0.0.1:3000/namesandplaces/names'
// });
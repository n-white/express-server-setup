var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var request = require('request');
var router = require('./routes.js');

var app = express();

// Order of the below .use methods matters for body-parser
// (you will get undefined on req.body if you place it any lower)
app.use(morgan('dev'));
app.use(parser.json());

app.listen(3000, function() {
  console.log('this is our express server');
});

// app.set('port', 3000)
app.use('/', router);

// request.post({
// 	method: 'POST',
// 	url: 'http://localhost:3000/getarticle',
// 	json: {title: 'happy'}
// })
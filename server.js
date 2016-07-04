var express = require('express');
var morgan = require('morgan');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
  res.send('This is our express server');
});

app.listen(3000, function() {
  console.log('this is our exress server');
});

request({})


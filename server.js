var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var request = require('request');
var router = require('./routes');

var app = express();

app.get('/', function(req, res) {
  res.send('This is our express server');
});

app.listen(3000, function() {
  console.log('this is our exress server');
});

request({
  method: 'POST',
  uri: 'http://127.0.0.1:3000/names',
  json: {
    name: 'jeremy'
  }
});


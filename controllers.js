var bluebird = require('bluebird');
var parser = require('body-parser');
var nameFields = ['name'];
var placeFields = ['place'];

var db = require('./database.js');

module.exports = {

  names: {
    get: function(req, res) {
      db.Name.findAll()
        .complete(function(error, results) {
          res.json(results);
        });
    },

    post: function(req, res) {
      console.log(req.body.first);
      db.Name.findOrCreate({where: {first: req.body.first, last: req.body.last}})
        .then(function(answer) {
          console.log(answer);
        }) 
    }
  }
}
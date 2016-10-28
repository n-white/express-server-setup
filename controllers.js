var bluebird = require('bluebird');
var parser = require('body-parser');
// var nameFields = ['name'];
// var placeFields = ['place'];

// var db = require('./database.js');

module.exports = {

  article: {

    postArticle: function(req, res) {
      db.Fbooks.findOrCreate({where: {article: req.body.title, likes: req.body.likes, loves: req.body.loves}}).then(function(data) {
        res.send(data);
      })      
    },

    getArticle: function(req, res) {
      console.log(req.body);
      res.send(req.body);

      // console.log(req.body);
      // db.Fbooks.findAll({where: {article: {like: '%' + req.body.title + '%'}}}).then(function(data) {
      //   console.log(data)
      // })
    }

  }

}

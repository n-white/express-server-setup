// var db = require('./database.js');

module.exports = {
  names: {
    post: function(params, callback) {
      var sqlInstruction = "INSERT INTO names (name) value (?)"
      db.query(sqlInstruction, params, function(err, results) {
        if (err) {
          console.log('names post: ', err);
          throw err;
        }
        callback(err, results); 
      })
    },
    get: function(callback) {
      var sqlInstruction = 'select * from names';
      db.query(sqlInstruction, function(err, results){
        if (err) {
          console.log('names get: ', err)
        }
        callback(err, results)
      })
    }
  }
}
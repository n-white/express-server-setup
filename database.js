var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'namesAndPlaces'
});

connection.connect();

module.exports = connection;
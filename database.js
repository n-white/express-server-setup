var Sequelize = require('Sequelize');
var orm = new Sequelize('namesandplaces', 'root', 'cake');

var 

var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'cake',
  database: 'namesandplaces'
});

connection.connect();

module.exports = connection;
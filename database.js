var Sequelize = require('Sequelize');
var orm = new Sequelize('namesandplaces', 'root', 'cake');

// Designating Name and Place Schemas
var Name = orm.define('Name', {
	first: Sequelize.STRING,
	last: Sequelize.STRING
});

var Place = orm.define('Place', {
	place: Sequelize.STRING
});

// Designating relationships withing those schemas
Place.hasMany(Name);
Name.belongsTo(Place);

// Sync the Name and Place schemas to the Database
Name.sync();
Place.sync();

exports.Name = Name;
exports.Place = Place;

// ALL OF THE ABOVE REPLACES THE BELOW COMMENTED SECTION WHEN USING SEQUELIZE 

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   user: 'root',
//   password: 'cake',
//   database: 'namesandplaces'
// });

// connection.connect();

// module.exports = connection;
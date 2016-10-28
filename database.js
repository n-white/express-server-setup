var Sequelize = require('Sequelize');
var orm = new Sequelize('fbook', 'root', 'cake');
var bluebird = require('bluebird');

var Fbooks = orm.define('Fbooks', {
	article: Sequelize.STRING,
	likes: Sequelize.INTEGER,
	loves: Sequelize.INTEGER
});

// Sync the Phrase and Country schemas to the Database
Fbooks.sync()

exports.Fbooks = Fbooks;
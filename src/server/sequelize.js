const { Sequelize, Model, DataTypes } = require('sequelize');

let sequelize;

module.exports =
	process.env.NODE_ENV == 'test'
		? new Sequelize('sqlite::memory:')
		: new Sequelize('mysql://root:toor@localhost:3306/quarenteam');

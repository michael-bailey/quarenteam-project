const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');

class User extends Model {}
User.init(
	{
		username: DataTypes.STRING,
		email: DataTypes.STRING,
	},
	{ sequelize, modelName: 'user' }
);

module.exports = {
	User,
};

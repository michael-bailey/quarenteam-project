const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');

class Quiz extends Model {}
Quiz.init(
	{
		text: DataTypes.STRING,
	},
	{ sequelize, modelName: 'quiz' }
);

module.exports = {
	Quiz,
};

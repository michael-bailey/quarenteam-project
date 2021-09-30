const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');
const Answer = require('.')

class Question extends Model {}
Question.init(
	{
		text: DataTypes.STRING,
	},
	{ sequelize, modelName: 'question' }
);

module.exports = {
	Question,
};

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');

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

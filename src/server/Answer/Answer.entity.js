const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');

class Answer extends Model {}
Answer.init(
	{
		text: DataTypes.STRING,
	},
	{ sequelize, modelName: 'answer' }
);

module.exports = {
	Answer,
};
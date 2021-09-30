const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');

class QuizAttempt extends Model {}
QuizAttempt.init(
	{
		correctCount: DataTypes.INTEGER,
	},
	{ sequelize, modelName: 'quiz' }
);

module.exports = {
	Quiz,
};

//TODO: add relationships

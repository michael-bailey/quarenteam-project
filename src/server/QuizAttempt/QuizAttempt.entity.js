const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js');

class QuizAttempt extends Model {}
QuizAttempt.init(
	{
		email: DataTypes.STRING,
		correctCount: DataTypes.INTEGER,
	},
	{ sequelize, modelName: 'quiz_attempt' }
);

module.exports = {
	QuizAttempt,
};

//TODO: add relationships

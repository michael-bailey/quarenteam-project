const { User } = require('../User/User.entity');
const { QuizAttempt } = require('../QuizAttempt/QuizAttempt.entity');
const { Answer } = require('../Answer/Answer.entity');
const { Question } = require('../Question/Question.entity');
const sequelize = require('../sequelize');

User.hasMany(QuizAttempt);
QuizAttempt.belongsTo(User);

module.exports = {
	User,
	QuizAttempt,
	Question,
	Answer,
	sequelize,
};

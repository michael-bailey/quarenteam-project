const { User } = require('../User/User.entity');
const { QuizAttempt } = require('../QuizAttempt/QuizAttempt.entity');

const { Answer } = require('../Answer/Answer.entity');
const { Question } = require('../Question/Question.entity');
const sequelize = require('../sequelize');
const { Quiz } = require('../Quiz/Quiz.entity');


User.hasMany(QuizAttempt);
QuizAttempt.belongsTo(User);

Quiz.hasMany(QuizAttempt);
QuizAttempt.belongsTo(Quiz);

Quiz.hasMany(Question);
Question.belongsTo(Quiz);

Question.hasMany(Answers);
Answer.belongsTo(Question);

module.exports = {
	User,
	QuizAttempt,
	Question,
	Answer,
	sequelize,
	Quiz,


};

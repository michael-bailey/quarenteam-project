const { User } = require('../User/User.entity');
const { QuizAttempt } = require('../QuizAttempt/QuizAttempt.entity');
const { Quiz } = require('../Quiz/Quiz.entity');
const { Question } = require('../Question/Question.entity');
const { Answer } = require('../Answer/Answer.entity');

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
	Quiz,
	Question,
	Answer
};

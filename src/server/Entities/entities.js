const { User } = require('../User/User.entity');
const { QuizAttempt } = require('../QuizAttempt/QuizAttempt.entity');

User.hasMany(QuizAttempt);
QuizAttempt.belongsTo(User);

module.exports = {
	User,
	QuizAttempt,
};

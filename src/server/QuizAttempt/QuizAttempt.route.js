const { Router } = require('express');
const { QuizAttempt, User } = require('../Entities/entities');

/**
 * # QuizAttemptRouter '/backend/quiz_attempt'
 *
 * Controls all user api
 * - route '/':
 * 	- get: returns all quiz_attempts
 * 	- post: creates a new quiz_attempt
 * - route '/:id'
 *  - get: get the quiz_attempt by id
 * 	- patch: update quiz_attempt by id
 *  - delete: delete a quiz_attempt by id
 */
const QuizAttemptRouter = Router();

QuizAttemptRouter.route('/quiz_attempt/')
	.get(async (req, res) => {
		const attempts = await QuizAttempt.findAll();
		console.table(attempts);
		res.json(attempts);
	})
	.post(async (req, res) => {
		const attempt = await QuizAttempt.create({
			correctCount: req.body.correctCount,
			email: req.body.email,
		});
		console.table(attempt);
		res.json(attempt);
	});

QuizAttemptRouter.route('/quiz_attempt/email/:email').get(async (req, res) => {
	const attempts = await QuizAttempt.findAll({
		where: { email: req.body.email },
	});
	return attempts;
});

QuizAttemptRouter.route('/quiz_attempt/:id')
	.get(async (req, res) => {
		const attempt = await QuizAttempt.create({ correctCount: 2 });
		console.log(attempt);
		res.json(attempt);
	})
	.patch(async (req, res) => {
		QuizAttempt.update(req.body, { where: { id: req.params.id } });
	})
	.delete(async (req, res) => {
		QuizAttempt.destroy({ where: { id: req.params.id } });
	});

console.log('attempt stack');
console.table(QuizAttemptRouter.stack);

module.exports = {
	QuizAttemptRouter,
};

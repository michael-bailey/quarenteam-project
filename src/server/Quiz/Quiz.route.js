const { Router } = require('express');
const { Quiz } = require('./Quiz.entity');

/**
 * # QuizRouter '/backend/quiz'
 *
 * Controls all quiz api
 * - route '/':
 * 	- get: returns all quizzes
 * 	- post: creates a new quiz
 * - route '/:id'
 *  - get: get the quiz by id
 * 	- patch: update quiz by id
 *  - delete: delete a quiz by id
 */
const QuizRouter = Router();

QuizRouter.route('/quiz/')
	.get(async (req, res) => {
		const quizzes = await Quiz.findAll();
		res.json(quizzes);
	})

QuizRouter.route('/quiz/:id')
	.get(async (req, res) => {
		let quiz = await Quiz.findByPk(req.params.id);
		res.json(quiz);
	})

module.exports = {
	QuizRouter,
};
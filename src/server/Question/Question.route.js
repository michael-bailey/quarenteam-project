const { Router } = require('express');
const { Question } = require('./Question.entity');

/**
 * # UserRouter '/backend/question'
 *
 * Controls all user api
 * - route '/':
 * 	- get: returns all questions
 * - route '/:id'
 *  - get: get the question by id
 * - route '/:quiz_id'
 *  - get: gets all questions in a quiz
 */
const QuestionRouter = Router('/question');

QuestionRouter.route('/')
	.get(async (req, res) => {
		const questions = await Question.findAll();
		res.json(questions);
	})

QuestionRouter.route('/:id')
	.get(async (req, res) => {
		let question = await Question.findByPk(req.params.id);
		res.json(question);
	})

//Needs implementing
QuestionRouter.route('/:quiz_id')

module.exports = {
	QuestionRouter,
};
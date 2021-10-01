const { Router } = require('express');
const { Answer } = require('./Answer.entity');

/**
 * # UserRouter '/backend/answer'
 *
 * Controls all user api
 * - route '/':
 * 	- get: returns all answers
 * - route '/:id'
 *  - get: get the answer by id
 */
const AnswerRouter = Router();

AnswerRouter.route('/answer/').get(async (req, res) => {
	const answers = await Answer.findAll();
	res.json(answers);
});

AnswerRouter.route('/answer/:id').get(async (req, res) => {
	let answer = await Answer.findByPk(req.params.id);
	res.json(answer);
});

module.exports = {
	AnswerRouter,
};

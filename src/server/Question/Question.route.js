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
 */

function questionToObject(question) {
    return {
        text: question.text,
        correctAnswerID: 420,
        answerIDs: [420, 321, 678, 999],
    }
}

const QuestionRouter = Router('/question');

QuestionRouter.route('/')
	.get(async (req, res) => {
		const questions = await Question.findAll();
		res.json(questions.map(question => questionToObject(question)));
	})

QuestionRouter.route('/:id')
	.get(async (req, res) => {
		let question = await Question.findByPk(req.params.id);
		res.json(questionToObject(question));
	})

module.exports = {
	QuestionRouter,
};
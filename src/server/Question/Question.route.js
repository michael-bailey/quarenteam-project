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
        text: "hello ??",
        correctAnswerID: 420,
        answerIDs: [420, 321, 678, 999],
    }
}

const QuestionRouter = Router();

QuestionRouter.route('/')
	.get(async (req, res) => {

		res.json("hello");
	})

QuestionRouter.route('/question/:id').get(async (req, res) => {
	let question = await Question.findByPk(req.params.id);
	res.json(questionToObject(question));
});

module.exports = {
	QuestionRouter,
};

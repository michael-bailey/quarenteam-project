const { Router } = require('express');

const QuizAttemptRouter = Router('quiz');

QuizAttemptRouter.route('/')
	.get(async (req, res) => {})
	.post(async (req, res) => {});

QuizAttemptRouter.route('/:id')
	.get(async (req, res) => {})
	.patch(async (req, res) => {})
	.delete(async (req, res) => {});

module.exports = {
	QuizAttemptRouter,
};

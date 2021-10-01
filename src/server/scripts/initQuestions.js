const {
	sequelize,
	User,
	QuizAttempt,
	Answer,
	Question,
} = require('../Entities/entities');

async function main() {
	const fetch = await (await import('node-fetch')).default;
	const obj = await (
		await fetch(
			'https://multiverselearningproducts.github.io/swe/BCS-sample-questions.json'
		)
	).json();
	console.table(obj);

	await sequelize.sync();

	obj.questions.forEach(async (element) => {
		let question = await Question.create({ text: element.question });

		let answerEntities = await Promise.all(
			element.answers.map(async (e) => {
				let ans = await Answer.create({ text: e.answer });
				return { obj: ans, id: e.id };
			})
		);
		console.table(answerEntities);

		let correct = obj.correct_answers[element.id];

		console.log('correct: ', correct);

		let correctAns = element.answers.find((e) => e.id == correct);

		console.log('correctAns: ', correctAns);

		correctAnsId = answerEntities.find((e) => e.id == correctAns.id);

		console.table('correctAnsId:');
		console.table(correctAnsId);

		question.answerId = correctAnsId.id;
		question = await question.save();
		console.table('question:');
		console.table(question);
	});
}
main();

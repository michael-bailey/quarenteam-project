const bodyParser = require('body-parser');
const { Router } = require('express');
const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const sequelize = require('./sequelize');

const { UserRouter } = require('./User/User.route');
const { QuizAttemptRouter } = require('./QuizAttempt/QuizAttempt.route');

dotenv.config();

async function main() {
	// next js setup
	const nextApp = next({
		dev: true,
		dir: './src/client',
	});
	await nextApp.prepare();

	// sequelize setup
	await sequelize.sync();

	// express setup
	const app = express();

	// global middle ware
	app.use(express.json());
	app.use(express.urlencoded());

	// ui route
	app.get(/^((?!\/backend).)*$/, nextApp.getRequestHandler());

	// api router
	const ApiRouter = Router().use(UserRouter).use(QuizAttemptRouter);

	app.use('/backend/', ApiRouter);

	console.log('express router');
	console.table(app._router.stack);
	app.listen(3000);
}
main();

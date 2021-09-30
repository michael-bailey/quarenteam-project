const bodyParser = require('body-parser');
const { Router } = require('express');
const express = require('express');
const next = require('next');
const dotenv = require('dotenv');

dotenv.config()

const sequelize = require('./sequelize');
const { UserRouter } = require('./User/User.route');

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
	const ApiRouter = Router().use(UserRouter);

	// app.use(/^(\/backend?.*)$/, ApiRouter);
	app.listen(3000);
}
main();

const { Router } = require('express');
const express = require('express');
const next = require('next');

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

	// ui route
	app.get(/^((?!\/backend).)*$/, nextApp.getRequestHandler());

	// api router
	const ApiRouter = Router().use(UserRouter);

	app.use(/^(\/backend?.*)$/, ApiRouter);
	app.listen(3000);
}
main();

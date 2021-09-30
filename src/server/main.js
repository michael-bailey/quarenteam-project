const express = require('express');
const next = require('next');

const sequelize = require('./sequelize');

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
	app.get(/^((?!\/api).)*$/, nextApp.getRequestHandler());
	app.get(/^(\/api?.*)$/, (req, res) => {
		res.send('Hello api');
	});
	app.listen(3000);
}
main();

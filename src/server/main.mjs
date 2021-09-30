import express from 'express';
import next from 'next';

async function main() {
	// next js setup
	const nextApp = next({
		dev: true,
		dir: './src/client',
	});
	await nextApp.prepare();

	// express setup
	const app = express();

	// add next as ui route handler
	app.get(/^((?!\/api).)*$/, nextApp.getRequestHandler());
	app.get(/^(\/api?.*)$/, (req, res) => {
		res.send('Hello api');
	});
	// listen on port
	app.listen(3000);
}
main();

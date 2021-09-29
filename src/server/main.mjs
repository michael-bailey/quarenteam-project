import express from 'express';
import next from 'next';

async function main() {
	// next js setup
	const nextApp = next({
		dev: true,
		dir: './src/client',
		conf: { basePath: '/ui' },
	});
	await nextApp.prepare();

	// express setup
	const app = express();

	// add next as ui route handler
	app.get('/ui/', nextApp.getRequestHandler());
	app.get('/ui/*', nextApp.getRequestHandler());
	// redirect to ui
	app.get('/', (req, res) => {
		res.redirect('/ui');
	});

	// listen on port
	app.listen(3000);
}
main();

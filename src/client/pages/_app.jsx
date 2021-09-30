import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/about.css'

// This is the main application fot the next app
function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* head of the html bage */}
			<Head>
				<title>Quarenteam</title>
			</Head>
			{/* global page structure can go here */}

			{/* the page being loaded */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

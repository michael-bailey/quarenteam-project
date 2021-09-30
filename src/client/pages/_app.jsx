import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
import 'bootstrap/dist/css/bootstrap.css';

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
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</>
	);
}

export default MyApp;

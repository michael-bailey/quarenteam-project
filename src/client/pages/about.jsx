import Link from 'next/link';

export default function AboutPage() {
	return (
		<>
			<h1>About This App</h1>
			<Link href='/' passHref>
				<a>Home</a>
			</Link>
		</>
	);
}

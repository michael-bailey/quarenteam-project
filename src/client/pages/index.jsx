import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Hello world</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				{count}
			</button>
			<Link href='/about'>
				<a>About</a>
			</Link>
		</>
	);
}

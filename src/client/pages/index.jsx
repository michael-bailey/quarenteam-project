import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Hello world</h1>
			<a href="/auth/login" >Login</a>
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				{count}
			</button>

			{/* the next link component should be used for navigation */}
			<Link href='/about'>
				<a>About</a>
			</Link>
		</>
	);
}

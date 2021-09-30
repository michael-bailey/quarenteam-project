import React, { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import Header from '../components/header'

export default function HomePage() {
	const { user, error, isLoading } = useUser();
	const [count, setCount] = useState(0);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
			<>
		  		<Header/>
				  <div class="h-100 row align-items-center">	
		  				<h4 class="">Welcome {user.name}!</h4>
				</div>
		  	</>
		);
	  }
	  return <a href="/api/auth/login">Login</a>;
	};
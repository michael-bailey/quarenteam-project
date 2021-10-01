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
		  		<Header user={user}/>
				  <div className="h-100 row">	
		  				<h4 className="col text-center position-absolute top-50 start-25">Welcome {user.name}!</h4>
				</div>
		  	</>
		);
	  }
	  return <Header/>
	};
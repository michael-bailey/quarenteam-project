import React, { useState, useEffect } from 'react';
import {  Nav, } from 'react-bootstrap';

export default function LoggedIn() {  
	
	
    return (
		<>
			<Nav.Link href="/about">Profile</Nav.Link>
			<Nav.Link className="text-danger" href="/api/auth/logout">Logout</Nav.Link>
		</>
	);
}


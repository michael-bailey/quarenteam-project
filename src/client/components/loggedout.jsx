import React, { useState, useEffect } from 'react';
import {  Nav, } from 'react-bootstrap';

export default function LoggedOut() {  
    return (
		<>
			<Nav.Link className="text-success" href="/api/auth/login">Login</Nav.Link>   
		</>
	);
}


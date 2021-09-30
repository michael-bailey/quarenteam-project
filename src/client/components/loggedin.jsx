import React, { useState, useEffect } from 'react';

export default function LoggedIn() {  
    return (
		<>
            <a className="nav-link btn text-danger" href="/api/auth/logout">Logout</a>       
		</>
	);
}


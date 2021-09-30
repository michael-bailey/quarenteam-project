import React, { useState, useEffect } from 'react';

export default function LoggedOut() {  
    return (
		<>
            <a className="nav-link btn text-success" href="/api/auth/login">Login</a>       
		</>
	);
}


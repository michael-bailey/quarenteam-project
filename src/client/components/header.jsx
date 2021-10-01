import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { height } from 'dom-helpers';
import LoggedOut from './loggedout';
import LoggedIn from './loggedin';
import ScriptTag from 'react';

export default function Header(props) {  
    
    useEffect(() => {
        const script = document.createElement("script");
        const script2 = document.createElement("script");
        const script3 = document.createElement("script");

        script.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js";
        script.async = true;
        document.body.appendChild(script);

        script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js";
        script2.async = true;
        document.body.appendChild(script2);

        script3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js";
        script3.async = true;
        document.body.appendChild(script3);
    })

    return (
		<>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-5">
                <a className="navbar-brand" href="/">BCS Quizzers</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Profile</a>
                    </li>
                    <li className="nav-item">
                        {props.user ? <LoggedIn/> : <LoggedOut/>}
                    </li>
                    </ul>
                </div>
            </nav>
		</>
	);
}

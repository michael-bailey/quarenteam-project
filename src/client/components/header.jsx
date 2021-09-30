import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { height } from 'dom-helpers';
import LoggedOut from './loggedout';
import LoggedIn from './loggedin';

export default function Header(props) {  
    return (
		<>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-5">
                <a className="navbar-brand" href="/">BCS Quizzers</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
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


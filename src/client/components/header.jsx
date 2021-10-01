import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { height } from 'dom-helpers';
import LoggedOut from './loggedout';
import LoggedIn from './loggedin';
import ScriptTag from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function Header(props) {  
    
    return (
		<>
            <Navbar bg="dark"  variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">BCS Quizzers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.user ? <LoggedIn/> : <LoggedOut/>}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
		</>
	);
}

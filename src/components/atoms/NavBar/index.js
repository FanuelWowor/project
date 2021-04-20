import React from 'react'
import * as b from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <b.Navbar bg="light" expand="lg" className="justify-content-center">
            <b.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <b.Navbar.Collapse id="basic-navbar-nav">
                <b.Nav className="mr-auto">
                <b.Nav.Link style={{ color: 'black' }} as={Link} to="/"><b>Login</b></b.Nav.Link>
                <b.Nav.Link style={{ color: 'black' }} as={Link} to="/Register"><b>Register</b></b.Nav.Link>
                <b.Nav.Link style={{ color: 'black' }} as={Link} to="/Dashboard"><b>Dashboard</b></b.Nav.Link>
                <b.Nav.Link style={{ color: 'black' }} as={Link} to="/About"><b>About</b></b.Nav.Link>
                <b.Nav.Link style={{ color: 'black' }} as={Link} to="/Tugas"><b>NEWEST</b></b.Nav.Link>
                </b.Nav>
            </b.Navbar.Collapse>
        </b.Navbar>
    )
}

export default NavBar
import React from 'react'
import * as b from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <b.Navbar bg="dark" expand="lg" className="justify-content-center">
            <b.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <b.Navbar.Collapse id="basic-navbar-nav">
                <b.Nav className="mr-auto">
                <b.Nav.Link style={{ color: 'white' }} as={Link} to="/Register"><b>Freshman PreRegistration</b></b.Nav.Link>                
                </b.Nav><b.Nav style={{ color: 'white' }}><center><b>UNIVERSITAS KLABAT</b></center></b.Nav>
            </b.Navbar.Collapse>
        </b.Navbar>
    )
}

export default NavBar
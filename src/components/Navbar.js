import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Navbar, Nav, } from 'react-bootstrap';


const MyNavbar = ({
    userToken,
}) => {
    return (
        <>
            <Navbar
                id='navbar'
                variant="dark"
                expand="md"
                className="animate-navbar nav-theme justify-content-between"
                style={{ color: 'blueviolet' }}
            >



                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="ml-auto" id="responsive-navbar-nav">
                    <Nav id="navlink" className="mr-auto" >

                        <NavLink to="/home" activeClassName="current">HOME</NavLink>
                        <NavLink to="/routines" activeClassName="current">ROUTINES</NavLink>
                        {userToken && <NavLink to="/myRoutines" activeClassName="current">MY ROUTINES</NavLink>}
                        <NavLink to="/activities" activeClassName="current">ACTIVITIES</NavLink>
                        {!userToken && <NavLink to="/login" activeClassName="current">LOGIN</NavLink>}
                        {!userToken && <NavLink to="/register" activeClassName="current">REGISTER</NavLink>}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </>
    );
}

export default MyNavbar;
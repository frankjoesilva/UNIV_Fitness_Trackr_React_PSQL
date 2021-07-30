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
                    <Nav id="navlink" className="mr-auto"
                    >

                        <NavLink to="/home" className='navLink' style={{ color: 'magenta' }}>HOME</NavLink>
                        <NavLink to="/routines" className='navLink' style={{ color: 'magenta' }}>ROUTINES</NavLink>
                        {userToken && <NavLink to="/myRoutines" className='navLink' style={{ color: 'magenta' }}>MY ROUTINES</NavLink>}
                        <NavLink to="/activities" className='navLink' style={{ color: 'magenta' }}>ACTIVITIES</NavLink>
                        {!userToken && <NavLink to="/login" className='navLink' style={{ color: 'magenta' }}>LOGIN</NavLink>}
                        {!userToken && <NavLink to="/register" className='navLink' style={{ color: 'magenta' }}>REGISTER</NavLink>}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </>
    );
}

export default MyNavbar;
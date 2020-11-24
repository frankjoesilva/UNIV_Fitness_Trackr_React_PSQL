import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({
    userToken,
}) => {
    return (
        <>

            <div>
                <ul id="navbar">
                    <NavLink to="/home" activeClassName="current">HOME</NavLink>
                    <NavLink to="/routines" activeClassName="current">ROUTINES</NavLink>
                    {userToken && <NavLink to="/myRoutines" activeClassName="current">MY ROUTINES</NavLink>}
                    <NavLink to="/activities" activeClassName="current">ACTIVITIES</NavLink>
                    {!userToken && <NavLink to="/login" activeClassName="current">LOGIN</NavLink>}
                    {!userToken && <NavLink to="/register" activeClassName="current">REGISTER</NavLink>}
                </ul>
            </div>
        </>
    );
}

export default Navbar;
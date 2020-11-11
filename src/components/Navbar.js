import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import Login from './Login';
// import Home from './Home';
// import Register from './Register';
// import Routines from './MyRoutines';
// import Activities from './Activities';
// import MyRoutines from './MyRoutines';

const Navbar = ({
    userToken,
}) => {
    return (
        <>

            <div>
                <ul id="navbar">
                    <li><NavLink to="/home" activeClassName="current">HOME</NavLink></li>
                    <li><NavLink to="/routines" activeClassName="current">ROUTINES</NavLink></li>
                    {userToken && <li><NavLink to="/my_routines" activeClassName="current">MY ROUTINES</NavLink></li>}
                    <li><NavLink to="/activities" activeClassName="current">ACTIVITIES</NavLink></li>
                    {!userToken && <li><NavLink to="/login" activeClassName="current">LOGIN</NavLink></li>}
                    {!userToken && <li><NavLink to="/register" activeClassName="current">REGISTER</NavLink></li>}
                </ul>
            </div>
        </>
    );
}

export default Navbar;
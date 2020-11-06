import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import './Navbar.css';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Routines from './MyRoutines';
import Activities from './Activities';
import MyRoutines from './MyRoutines';

const Navbar = (props => {
    return (
        <>

            <div>
                <ul id="navbar">
                    <li><NavLink to="/home" activeClassName="current">HOME</NavLink></li>
                    <li><NavLink to="/routines" activeClassName="current">ROUTINES</NavLink></li>
                    <li><NavLink to="/my_routines" activeClassName="current">MY ROUTINES</NavLink></li>
                    <li><NavLink to="/activities" activeClassName="current">ACTIVITIES</NavLink></li>
                    <li><NavLink to="/login" activeClassName="current">LOGIN</NavLink></li>
                    <li><NavLink to="/register" activeClassName="current">REGISTER</NavLink></li>
                </ul>
            </div>
            {/* <Route path="/home" exact component={Home}></Route>
            <Route path="/routines" exact component={Routines}></Route>
            <Route path="/my_routines" exact component={MyRoutines}></Route>
            <Route path="/activities" exact component={Activities}></Route>
            <Route path="/register" exact component={Register}></Route> */}
            {/* <Route path="/login" exact component={Login}></Route> */}
        </>
    );
})

export default Navbar;
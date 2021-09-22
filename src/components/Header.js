import React from 'react';
import './Header.css';
import logo from '../assets/icons/logo.png'
import {
    // Redirect,
    useHistory
} from 'react-router-dom'

const Header = ({
    userToken,
    setUserToken
}) => {

    const history = useHistory();

    const handleUserLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        setUserToken('')
        history.push("/login")

    }

    return (
        <header>
            <a className='navbar-logo' href="home">
                <img src={logo} alt='header-logo' className='logo' />
            </a>

            {userToken ? <button id='logout-btn' onClick={handleUserLogout}>Logout</button> : null}

            {/* {!userToken ? <Redirect to="/login" /> : null} */}
        </header>
    );
}

export default Header;
import React from 'react';
import './Header.css';
import logo from '../assets/icons/logo.png'

const Header = ({
    userToken,
    setUserToken
}) => {


    const handleUserLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        setUserToken('')
    }

    return (
        <header>
            <a className='navbar-logo' href="home">
                <img src={logo} alt='header-logo' className='logo' />
            </a>
            {userToken ? <button id='logout-btn' onClick={handleUserLogout}>Logout</button> : null}
        </header>
    );
}

export default Header;
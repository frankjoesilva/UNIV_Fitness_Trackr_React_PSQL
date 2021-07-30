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
            <div>
                <a class='navbar-logo' href="home">
                    <img src={logo} alt='header-logo' width="280" height="315" className='logo' />
                </a>
            </div>
            {userToken ? <button id='logout-btn' onClick={handleUserLogout}>Logout</button> : null}
        </header>
    );
}

export default Header;
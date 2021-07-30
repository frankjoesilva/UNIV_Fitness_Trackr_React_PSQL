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
                <img src={logo} alt='header-logo' width="280" height="300" className='logo' />
            </div>
            {userToken ? <button id='logout-btn' onClick={handleUserLogout}>Logout</button> : null}
        </header>
    );
}

export default Header;
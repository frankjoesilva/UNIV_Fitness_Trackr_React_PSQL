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
                <img className='logo' src={logo} alt='header-logo' />
                {userToken ? <button id='logout-btn' onClick={handleUserLogout}>Logout</button> : null}
            </div>
        </header>
    );
}

export default Header;
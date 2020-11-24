import React, { useState } from 'react';
import './Header.css';

const Header = ({
    userToken,
    setUserToken
}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

    }

    const handleUserLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        setUserToken('')
    }

    return (
        <header>
            <h1>Fitness Trackr</h1>
            {userToken ? <button id='logout-btn' onClick={handleUserLogout}>Logout</button> : null}
        </header>
    );
}

export default Header;
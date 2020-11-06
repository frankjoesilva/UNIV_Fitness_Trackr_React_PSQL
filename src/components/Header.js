import React, { useState } from 'react';
import Login from './Login'
import './Header.css';

const Header = ({
    currentUser,
    setCurrentUser,
    userToken,
    setUserToken
}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

    }

    const handleSelectChange = (event) => {

    }

    const handleUserLogin = (event) => {

    }

    const handleUserLogout = (event) => {
        event.preventDefault()
        setUserToken('')
    }

    const handleUserRegister = (event) => {

    }

    return (
        <header>
            <h1>Fitness Trackr</h1>
            {/* {userToken ? <button onClick={handleUserLogout}>Logout</button> : <Login setUserToken={setUserToken} */}
        </header>
    );
}

export default Header;
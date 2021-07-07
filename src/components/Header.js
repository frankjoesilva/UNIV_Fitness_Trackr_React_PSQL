import React from 'react';
import './Header.css';

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
            <h1>Fitness Trackr</h1>
            {userToken ? <button id='logout-btn' onClick={handleUserLogout}>Logout</button> : null}
        </header>
    );
}

export default Header;
import React, { useState } from 'react';

import './Header.css';

const Header = ({
    currentUser,
    setCurrentUser,
    userList }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleSelectChange = (event) => {

    }

    const handleUserLogin = (event) => {

    }

    const handleUserLogout = (event) => {

    }

    const handleUserRegister = (event) => {

    }

    return (
        <header>
            <h1>Welcome to Fitness Trackr</h1>
            <form
                className="user-select"
                onSubmit={handleSubmit} >
                {
                    currentUser
                        ? <button onClick={handleUserLogout}>LOG OUT</button>
                        : <>
                            <input onChange={handleSelectChange}></input>
                            <button onClick={handleUserLogin}>LOG IN</button>
                            <button onClick={handleUserRegister}>REGISTER</button>
                        </>
                }
            </form>
        </header>
    );
}

export default Header;
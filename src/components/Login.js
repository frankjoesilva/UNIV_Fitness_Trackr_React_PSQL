import React, { useState, useEffect } from 'react';
import { getUserLogin } from '../api/users';


const Login = ({
    handleSubmit,
    handleUserLogout,
    handleSelectChange,
    handleUserLogin,
    handleUserRegister,
    currentUser,
    setUserToken

}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (<form
        className="user-select"
        onSubmit={async (event) => {
            event.preventDefault();
            try {
                const token = await getUserLogin(username, password)
                console.log('token', token)
                setUserToken(token)
            } catch (error) {
                console.error(error)
            }
        }} >
        {
            currentUser
                ? <button onClick={handleUserLogout}>LOG OUT</button>
                : <>
                    <input value={username} placeholder=' username'
                        onChange={(event) => {
                            const username = event.target.value
                            setUsername(username)

                        }}></input>
                    <input value={password} placeholder=' password'
                        onChange={(event) => {
                            const password = event.target.value
                            setPassword(password)
                        }}></input>
                    <button onClick={handleUserLogin}>LOG IN</button>
                    <button onClick={handleUserRegister}>REGISTER</button>
                </>
        }
    </form>)
}


export default Login;
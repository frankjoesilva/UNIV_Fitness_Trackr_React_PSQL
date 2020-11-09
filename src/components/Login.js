import React, { useState, useEffect } from 'react';
import { getUserLogin, getUsersMe } from '../api/users';
import { Form, Button } from 'react-bootstrap'
import './Login.css';

import {
    Redirect
} from 'react-router-dom'


const Login = ({

    handleUserLogin,
    userToken,
    setUserToken

}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    return (
        userToken ? <Redirect to="/" /> : <Form

            className="login"
            onSubmit={async (event) => {
                event.preventDefault();
                try {
                    setError('')
                    const data = await getUserLogin(username, password)
                    console.log('data', data)
                    if (data.token) {
                        setUserToken(data.token)
                    }
                    else {
                        setError(data.message)
                    }

                } catch (error) {
                    console.error(error)
                }
            }} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control value={username} type="username" placeholder="Username" onChange={(event) => {
                    const username = event.target.value
                    setUsername(username)

                }} />
                {error ? <div>{error}</div> : null}

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} type="password" placeholder="Password" onChange={(event) => {
                    const password = event.target.value
                    setPassword(password)
                }} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">

            </Form.Group>
            <Button onClick={handleUserLogin} variant="primary" type="submit">
                Login
</Button>
        </Form>)
}



export default Login;
import React, { useState, useEffect } from 'react';
import { getUserLogin } from '../api/users';
import { Form, Button, Alert } from 'react-bootstrap'
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
    const [showAlert, setShowAlert] = useState(true)

    useEffect(() => {
        setShowAlert(true)
    }, [userToken])


    return (
        !userToken ? <Form

            className="login"
            onSubmit={async (event) => {
                event.preventDefault();
                try {
                    if (!username || !password) {
                        setError('Incorrect Username or Password')
                        return
                    }
                    const data = await getUserLogin(username, password)

                    console.log('data', data)
                    if (data.token) {
                        localStorage.setItem('token', data.token)
                        setUserToken(data.token)
                    }
                    else if (!data.message) {
                        setError('Incorrect Username or Password')
                    }
                    else {
                        setError(data.message)
                    }
                } catch (error) {
                    console.error(error)
                    setError(error.message)
                }
            }} >
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username: </Form.Label>
                <Form.Control value={username} type="username" placeholder="Username" onChange={(event) => {
                    const username = event.target.value
                    setUsername(username)

                }} />
                {error ? <div>{error}</div> : null}

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
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
        </Form> : (showAlert) ? <Alert variant='success' onClose={() => setShowAlert(false)} dismissible>
            <Alert.Heading>Success!</Alert.Heading>
            <p>
                Successful Login Congratulations!
        </p>
        </Alert> : <Redirect to='/home' />
    );
}



export default Login;
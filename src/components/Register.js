import React, { useState, useEffect } from 'react';
import { getUserRegister } from '../api/users';
import { Form, Button, Alert } from 'react-bootstrap'
import './Register.css';

import {
    Redirect
} from 'react-router-dom'



const Register = ({

    handleUserRegister,
    userToken,
    setUserToken

}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(true)
    }, [userToken])

    return (
        !userToken ? <Form

            className="register"
            onSubmit={async (event) => {
                event.preventDefault();
                setUsername('')
                setPassword('')
                try {
                    setError('')
                    const data = await getUserRegister(username, password)
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
            {error ? <div>{error}</div> : null}


            <Form.Group controlId="formBasicEmail">
                <div id='register-instructions'>Username must be 6 or more characters and password should have a minimum of 8 characters</div>
                <Form.Label>Username: </Form.Label>
                <Form.Control value={username} type="username" placeholder="Username" onChange={(event) => {
                    const username = event.target.value
                    setUsername(username)
                }} />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control value={password} type="password" placeholder="Password" onChange={(event) => {
                    const password = event.target.value
                    setPassword(password)
                }} />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">

                <Button onClick={handleUserRegister} variant="primary" type="submit">
                    Register
    </Button>
            </Form.Group>
        </Form> : (show) ? <Alert variant='success' onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Success!</Alert.Heading>
            <p>
                Successful Registration, Congratulations!
        </p>
        </Alert> : <Redirect to="/home" />
    );
}

export default Register;
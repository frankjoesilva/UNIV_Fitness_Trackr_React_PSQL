import React, { useState, useEffect } from 'react';
import { getUserRegister } from '../api/users';
import { Form, Button } from 'react-bootstrap'
import './Register.css';



const Register = ({

    handleUserRegister,
    userToken,
    setUserToken

}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (<Form
        className="register"
        onSubmit={async (event) => {
            event.preventDefault();
            try {
                const token = await getUserRegister(username, password)
                console.log('token', token)
                setUserToken(token)
                setUsername('')
                setPassword('')
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
        <Button onClick={handleUserRegister} variant="primary" type="submit">
            Register
    </Button>
    </Form>)
}

export default Register;
import React, { useState, useEffect } from 'react';
import { getUserLogin } from '../api/users';
import { Form, Button } from 'react-bootstrap'


const Login = ({
    handleSubmit,
    handleUserLogout,
    handleSelectChange,
    handleUserLogin,
    handleUserRegister,
    userToken,
    setUserToken

}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (<Form
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

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={username} type="username" placeholder="Username" onChange={(event) => {
                const username = event.target.value
                setUsername(username)
            }} />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
      </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} type="password" placeholder="Password" onChange={(event) => {
                const password = event.target.value
                setPassword(password)
            }} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handleUserLogin} variant="primary" type="submit">
            Login
    </Button>
    </Form>)
}
//     return (<form
//         className="user-select"
//         onSubmit={async (event) => {
//             event.preventDefault();
//             try {
//                 const token = await getUserLogin(username, password)
//                 console.log('token', token)
//                 setUserToken(token)
//             } catch (error) {
//                 console.error(error)
//             }
//         }} >
//         <>
//             <input value={username} placeholder=' username'
//                 onChange={(event) => {
//                     const username = event.target.value
//                     setUsername(username)

//                 }}></input>
//             <input value={password} placeholder=' password'
//                 onChange={(event) => {
//                     const password = event.target.value
//                     setPassword(password)
//                 }}></input>
//             <button onClick={handleUserLogin}>LOG IN</button>
//             <button onClick={handleUserRegister}>REGISTER</button>
//         </>

//     </form>)


export default Login;
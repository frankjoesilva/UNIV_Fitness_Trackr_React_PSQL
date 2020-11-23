import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getUsersMe } from './api/users'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import {
    Header,
    Navbar,
    Login,
    Register,
    Home,
    Routines,
    Activities,
    MyRoutines
} from './components';

const App = () => {
    const [user, setUser] = useState({})
    const [userToken, setUserToken] = useState('')
    const [allRoutines, setAllRoutines] = useState([])
    const [allActivities, setAllActivites] = useState([])
    const [myRoutines, setMyRoutines] = useState([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setUserToken(localStorage.getItem('token'))
            getUsersMe(localStorage.getItem('token'))
                .then(users => {
                    setUser(users)
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, [])

    useEffect(() => {
        if (userToken) {

            getUsersMe(userToken)
                .then(users => {
                    setUser(users)
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, [userToken])

    return (
        <Router>
            <div id="App">
                <Header userToken={userToken} setUserToken={setUserToken} />
                <Navbar userToken={userToken} setUserToken={setUserToken} />
            </div>
            <Route path='/login'>
                <Login user={user} setUser={setUser} userToken={userToken} setUserToken={setUserToken} />
            </Route>
            <Route path='/register'>
                <Register userToken={userToken} setUserToken={setUserToken} />
            </Route>
            <Route path='/home'>
                <Home userToken={userToken} setUserToken={setUserToken} />
            </Route>
            <Route path='/routines'>
                <Routines allRoutines={allRoutines} setAllRoutines={setAllRoutines} />
            </Route>
            <Route path='/activities'>
                <Activities userToken={userToken} allActivities={allActivities} setAllActivites={setAllActivites} />
            </Route>
            <Route path='/myRoutines'>
                <MyRoutines user={user} userToken={userToken} myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
            </Route>
        </Router>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
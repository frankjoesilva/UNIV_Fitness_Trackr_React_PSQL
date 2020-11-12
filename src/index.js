import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import {
    Header,
    Navbar,
    Login,
    Register,
    Home,
    Routines,
    Activities
} from './components';

const App = () => {
    const [userToken, setUserToken] = useState('')
    const [allRoutines, setAllRoutines] = useState([])
    const [allActivities, setAllActivites] = useState([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setUserToken(localStorage.getItem('token'))
        }
    }, [])

    return (
        <Router>
            <div id="App">
                <Header userToken={userToken} setUserToken={setUserToken} />
                <Navbar userToken={userToken} setUserToken={setUserToken} />
            </div>
            <Route path='/login'>
                <Login userToken={userToken} setUserToken={setUserToken} />
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
                <Activities allActivities={allActivities} setAllActivites={setAllActivites} />
            </Route>
        </Router>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
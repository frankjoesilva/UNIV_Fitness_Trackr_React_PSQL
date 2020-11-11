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
} from './components';

const App = () => {
    const [userToken, setUserToken] = useState('')
    const [allRoutines, setAllRoutines] = useState([])

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
        </Router>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
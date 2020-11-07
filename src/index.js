import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getUsersMe } from './api/users';
// import { getActivities } from './api/activities';
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
    Register
} from './components';

const App = () => {
    const [userToken, setUserToken] = useState('')

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
                <Register setUserToken={setUserToken} />
            </Route>
        </Router>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
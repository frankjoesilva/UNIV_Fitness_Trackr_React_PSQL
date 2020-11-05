import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getUsersMe } from './api/users';
// import { getActivities } from './api/activities';

import {
    Header
} from './components';

const App = () => {
    const [userToken, setUserToken] = useState('')

    return (
        <div id="App">
            <Header userToken={userToken} setUserToken={setUserToken} />

        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
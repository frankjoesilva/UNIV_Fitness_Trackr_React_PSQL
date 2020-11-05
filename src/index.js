import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getUsersMe } from './api/users';
// import { getActivities } from './api/activities';

import {
    Header
} from './components';

const App = () => {
    const [userToken, setUserToken] = useState('')
    const [userList, setUserList] = useState([]);


    useEffect(() => {
        getUsersMe()
            .then(users => {
                setUserList(users)
                console.log('users', users)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <div id="App">
            <Header userList={userList} userToken={userToken} setUserToken={setUserToken} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
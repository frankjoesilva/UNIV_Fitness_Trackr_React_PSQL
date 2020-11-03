import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getUsersMe } from './api/users';

import {
    Header
} from './components';

const App = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUsersMe()
            .then(users => {
                setUserList(users)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <div id="App">
            <Header userList={userList} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
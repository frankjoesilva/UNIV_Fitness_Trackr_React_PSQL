import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({
    userToken
}) => {
    return (
        <div id="home-page">
            {userToken ? <h1>Welcome To Fitness Tracker!</h1> : null}
        </div>
    );
}

export default Home;
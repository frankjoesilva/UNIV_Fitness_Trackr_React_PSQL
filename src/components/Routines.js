import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { getActivitiesFromRoutines } from '../api/routine_activities'
import { Card, Button } from 'react-bootstrap'
import './Routines.css'

import {
    Redirect
} from 'react-router-dom'

const publicRoutines = ({
    userToken,
    allRoutines,
    setAllRoutines,

}) => {
    const [routines, setRoutines] = useState([])
    // const [myRoutines, setMyroutines]


    useEffect(() => {
        getRoutines()
            .then(routines => {
                setRoutines(routines)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);
    console.log('routines', routines)

    return (
        <div className='public-routines'>

            <Card
                style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Public Routines</Card.Title>
                    <Card.Text type="public-routines" placeholder="Username"> {
                        routines.map((routine) => {
                            <h1>{routine.creatorName}</h1>
                        })
                    }

                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>


        </div>
    );
}

export default publicRoutines
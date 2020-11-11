import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { getActivitiesFromRoutines } from '../api/routine_activities'
import { Card } from 'react-bootstrap'
import './Routines.css'

import {
    Redirect
} from 'react-router-dom'

const publicRoutines = () => {
    const [routines, setRoutines] = useState([])
    // const [myRoutines, setMyroutines]


    useEffect(() => {
        getRoutines()
            .then(routines => {
                console.log('rotines', routines)
                setRoutines(routines)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    console.log('routines', routines)

    return (
        <div className='public-routines'>
            <h2>Public Routines</h2>
            {routines.map((routine) => {
                return (<Card
                    key={routine.id}
                    style={{ width: '23rem' }}>

                    <Card.Body>
                        <h3>Routines</h3>
                        <Card.Title>Creator Name:{routine.creatorName}</Card.Title>
                        <Card.Text>Name:{routine.name}</Card.Text>
                        <Card.Text>Goal:{routine.goal}</Card.Text>
                        <h3>Activities</h3>
                        {routine.activities.map((activity, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Card.Title>Activity Name:{activity.name}</Card.Title>
                                    <Card.Text>Activity Duration:{activity.duration}</Card.Text>
                                    <Card.Text>Activity Count:{activity.count}</Card.Text>
                                </React.Fragment>
                            )
                        })}
                    </Card.Body>
                </Card>)
            })}
        </div>
    );
}


export default publicRoutines
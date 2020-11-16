import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { Card } from 'react-bootstrap'
import './Routines.css'


const publicRoutines = () => {
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
            <h2 id="routine-title">Routines</h2>
            {routines.map((routine) => {
                return (<Card id="routine-card"
                    key={routine.id}
                    style={{ width: '23rem' }}>

                    <Card.Body>
                        <h2 id="routine-card-title">Routines</h2>
                        <Card.Title id="creator-name">Creator Name: {routine.creatorName}</Card.Title>
                        <Card.Text>Routine Name: {routine.name}</Card.Text>
                        <Card.Text>Goal:{routine.goal}</Card.Text>
                        <h4 id="activity-routine-title">Activities For Routines</h4>
                        {routine.activities.map((activity, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Card.Title id="activity-name">Activity Name: {activity.name}</Card.Title>
                                    <Card.Text>Activity Duration: {activity.duration}</Card.Text>
                                    <Card.Text>Activity Count: {activity.count}</Card.Text>
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
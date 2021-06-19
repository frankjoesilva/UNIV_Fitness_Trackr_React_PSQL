import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { Card } from 'react-bootstrap'
import './Routines.css'


const PublicRoutines = () => {
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        getRoutines()
            .then(routines => {
                setRoutines(routines)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <div className='public-routines'>
            <h2 id="routine-title">Routines</h2>
            {routines.map((routine) => {
                return (
                    <Card border="dark" id="routine-card"
                        key={routine.id}
                        style={{ width: '18rem' }}>
                        <Card.Header id="routine-card-title">Routines</Card.Header>
                        <Card.Body>
                            <Card.Title id="creator-name">Creator Name: {routine.creatorName}</Card.Title>
                            <Card.Text>Routine Name: {routine.name}</Card.Text>
                            <Card.Text>Goal:{routine.goal}</Card.Text>
                            <Card.Header id="activity-routine-title">Activities For Routines</Card.Header>
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


export default PublicRoutines
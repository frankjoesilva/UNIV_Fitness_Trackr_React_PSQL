import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { Card, CardDeck, Container } from 'react-bootstrap'
import './Routines.css'


const PublicRoutines = () => {
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        getRoutines()
            .then(routines => {
                console.log(routines, "rr")
                setRoutines(routines)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <div className='public-routines'>
            <h2 className="text-center font-details-b pb-4" id='routine-title'>Routines</h2>
            {routines.map((routine) => {
                return (<CardDeck key={routine.id}>
                    <Container>
                        <Card id="routine-card"
                            className="focus mt-2 mb-2"

                        >

                            <Card.Body>
                                <Card.Header id="Username" className="text-center  card-header">{routine.creatorName}</Card.Header>
                                <Card.Text className="text-center">Routine Name: {routine.name}</Card.Text>
                                <Card.Text className="text-center">Goal:{routine.goal}</Card.Text>
                                <Card.Title className="text-center  card-title" id="activities-for-routines" >Activities For Routines</Card.Title>
                                {routine.activities.map((activity, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <Card.Title className="text-center  card-title">Activity Name: {activity.name}</Card.Title>
                                            <Card.Text className="text-center">Activity Duration: {activity.duration}</Card.Text>
                                            <Card.Text className="text-center">Activity Count: {activity.count}</Card.Text>
                                        </React.Fragment>
                                    )
                                })}

                            </Card.Body>
                        </Card>
                    </Container>
                </CardDeck>)
            })}
        </div>
    );
}

export default PublicRoutines


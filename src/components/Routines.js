import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { Accordion, Card, CardDeck, Container, } from 'react-bootstrap'
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
            {routines.map((routine) => {
                return (<CardDeck key={routine.id}>
                    <Container>
                        <Accordion>

                            <Card id="routine-card"
                                className=" center focus mt-2 mb-2"
                            >

                                <Card.Body id='card-container'>
                                    <Card.Header id="Username" className="text-center  card-header">{routine.creatorName}</Card.Header>
                                    <Card.Text className="text-left">Routine Name: {routine.name}</Card.Text>
                                    <Card.Text className="text-left">Goal:{routine.goal}</Card.Text>
                                    <Accordion.Toggle
                                        id='toggle'
                                        as={Card.Header}
                                        eventKey="0"
                                        className="p-2 text-center accordian-main"
                                    >
                                        ACTIVITY DETAILS
                                    </Accordion.Toggle>
                                    {routine.activities.map((activity, index) => {
                                        return (

                                            <Accordion.Collapse eventKey="0" className="text-left" key={index}>
                                                <React.Fragment>
                                                    <Card.Text className="ml-auto">Activity Name: {activity.name}</Card.Text>
                                                    <Card.Text className="ml-auto">Activity Description: {activity.description}</Card.Text>
                                                    <Card.Text className="ml-auto">Activity Duration: {activity.duration}</Card.Text>
                                                    <Card.Text className="ml-auto">Activity Count: {activity.count}</Card.Text>
                                                </React.Fragment>
                                            </Accordion.Collapse>

                                        )
                                    })}

                                </Card.Body>
                            </Card>
                        </Accordion>
                    </Container>
                </CardDeck>)
            })}
        </div>
    );
}

export default PublicRoutines


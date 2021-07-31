import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { Accordion, Card, CardDeck, Container, } from 'react-bootstrap'
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
            {/* <h2 className="text-center font-details-b pb-4" id='routine-title'>Routines</h2> */}
            {routines.map((routine) => {
                return (<CardDeck key={routine.id}>
                    <Container>
                        <Accordion>

                            <Card id="routine-card"
                                className="focus mt-2 mb-2"
                            >

                                <Card.Body>
                                    <Card.Header id="Username" className="text-center  card-header">{routine.creatorName}</Card.Header>
                                    <Card.Text className="text-center">Routine Name: {routine.name}</Card.Text>
                                    <Card.Text className="text-center">Goal:{routine.goal}</Card.Text>
                                    {/* <Card.Header className="text-center  card-header" id="activities-for-routines" >Activities For Routines</Card.Header> */}
                                    <Accordion.Toggle
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
                                                    <Card.Text className="text-center  card-title">Activity Name: {activity.name}</Card.Text>
                                                    <Card.Text className="text-center">Activity Duration: {activity.duration}</Card.Text>
                                                    <Card.Text className="text-center">Activity Count: {activity.count}</Card.Text>
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


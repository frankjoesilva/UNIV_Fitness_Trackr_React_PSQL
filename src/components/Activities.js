import React, { useState, useEffect } from 'react'
import { getActivities, postActivities } from '../api/activities'
import { Card, Form, Button, Container, CardDeck } from 'react-bootstrap'
import './Activities.css'



const Activities = ({

    userToken
}) => {
    const [activities, setActivities] = useState([])
    const [activityName, setActivityName] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        getActivities()
            .then(activities => {
                setActivities(activities)
            })
            .catch(error => {
                console.error(error)
            });
    }, [userToken]);

    return (
        <Form
            onSubmit={async (event) => {
                event.preventDefault()
                setActivityName('')
                setDescription('')
                try {
                    const data = await postActivities(activityName, description, userToken)
                    if (data.name === 'error') {
                        setError('Activitiy Already Exists!')
                    }
                    else if (data.name === '') {
                        setError('Missing Fields')

                    }
                    else {
                        setActivities([...activities, data])
                    }

                } catch (error) {
                    setError(error)
                }

            }}
            className='activities'>

            {userToken ? <>

                <Container id="add-activities">
                    <Form.Group controlId="activityName">
                        <Form.Control value={activityName} type="Name" placeholder="Activity Name" onChange={(event) => {
                            const actName = event.target.value
                            setActivityName(actName)
                        }} />
                        {error ? <div>{error}</div> : null}

                    </Form.Group>

                    <Form.Group controlId="activityDescription">
                        <Form.Control value={description} type="Description" placeholder="Description" onChange={(event) => {
                            const description = event.target.value
                            setDescription(description)
                        }} />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Container>

            </> : null
            }
            <div className='public-activities'>
                {activities.map((activity) => {
                    return (<CardDeck
                        key={activity.id}
                        id="activity-cardDeck">
                        <Container>
                            <Card id="activity-card"

                                style={{ width: '23rem' }}>
                                <Card.Body id="card-container">
                                    <Card.Header className="text-center  card-title">Activity </Card.Header>
                                    <Card.Text>Activity Name: {activity.name}</Card.Text>
                                    <Card.Text>Description: {activity.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>
                    </CardDeck>)
                })}
            </div>
        </Form>

    );
}


export default Activities
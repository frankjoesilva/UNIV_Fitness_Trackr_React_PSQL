import React, { useState, useEffect } from 'react'
import { getActivities, postActivities } from '../api/activities'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import './Activities.css'

const Activities = ({

    userToken
}) => {
    const [activities, setActivities] = useState([])
    const [activityName, setActivityName] = useState('')
    const [description, setDescription] = useState('')


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
                    const data = await postActivities(name, description)
                    if (data.name || data.description) {
                        setError('Activitiy Already Exists!')
                    }

                } catch (error) {
                    console.error(error)
                }

            }}
            className='activities'>

            <h2 id="activities-title">Activities</h2>
            {userToken ? <>

                <Form.Group controlId="activityName">
                    <Form.Label>Activity Name: </Form.Label>
                    <Form.Control value={activityName} type="Name" placeholder="Activity Name" onChange={(event) => {
                        const actName = event.target.value
                        setActivityName(actName)
                    }} />

                </Form.Group>

                <Form.Group controlId="activityDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={description} type="Description" placeholder="Description" onChange={(event) => {
                        const description = event.target.value
                        setDescription(description)
                    }} />
                    <Button variant="primary" type="submit">
                        Submit
        </Button>
                </Form.Group>

            </> : null
            }
            {activities.map((activity) => {
                return (<Card id="activity-card"
                    key={activity.id}
                    style={{ width: '23rem' }}>
                    <Card.Body>
                        <Card.Title id="activity-name"><h3>Activity: </h3></Card.Title>
                        <Card.Text>Activity Name: {activity.name}</Card.Text>
                        <Card.Text>Description: {activity.description}</Card.Text>
                    </Card.Body>
                </Card>)
            })}

        </Form>

    );
}


export default Activities
import React, { useState, useEffect } from 'react'
import { getActivities } from '../api/activities'
import { Card } from 'react-bootstrap'
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        getActivities()
            .then(activities => {
                setActivities(activities)
            })
            .catch(error => {
                console.error(error)
            });
    }, []);

    return (
        <div className='activities'>
            <h2 id="activities-title">Activities</h2>
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
        </div>
    );
}


export default Activities
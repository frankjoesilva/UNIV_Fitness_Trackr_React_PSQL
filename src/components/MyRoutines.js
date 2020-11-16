import React, { useState, useEffect } from 'react'
import { getRoutines, getRoutinesByUsername, getCurrentUserRoutines, postRoutines } from '../api/routines'
import { postActivities } from '../api/activities'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import './MyRoutines.css'

const MyRoutines = ({
    userToken,
    user

}) => {
    const [myRoutines, setMyRoutines] = useState([])
    const [routineName, setRoutineName] = useState('')
    const [routineGoal, setRoutineGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)

    useEffect(() => {
        if (userToken) {
            getCurrentUserRoutines(userToken)
                .then(routines => {
                    console.log('routines', routines)
                    setMyRoutines(routines)
                })
                .catch(error => {
                    console.error(error)
                });
        }

    }, [userToken]);


    return (
        <Form
            onSubmit={async (event) => {
                event.preventDefault()
                setRoutineName('')
                setRoutineGoal('')
                try {
                    const updateActivity = await postRoutines(routineName, routineGoal, isPublic, userToken)
                    console.log('updateActivity', updateActivity)
                    setMyRoutines([...myRoutines, updateActivity])

                } catch (error) {
                    console.error(error)
                }
            }}
            className='my-routines'>

            {userToken ? <>

                <Form.Group controlId="routineName">
                    <Form.Label>Routine Name: </Form.Label>
                    <Form.Control value={routineName} type="Name" placeholder="Routine Name" onChange={(event) => {
                        const routine = event.target.value
                        setRoutineName(routine)
                    }} />

                </Form.Group>

                <Form.Group controlId="routineGoal">
                    <Form.Label>Goal</Form.Label>
                    <Form.Control value={routineGoal} type="Description" placeholder="Description" onChange={(event) => {
                        const goal = event.target.value
                        setRoutineGoal(goal)
                    }} />
                    <Button variant="primary" type="submit">
                        Submit
            </Button>
                </Form.Group>
            </> : null
            }
            {myRoutines.map((routine) => {
                if (user.id === routine.creatorId) {

                    {
                        return (<Card id="my-routine-card"
                            key={routine.id}
                            style={{ width: '23rem' }}>
                            <Card.Body>
                                <Card.Title id="rout-name"><h3>My Routines: </h3></Card.Title>
                                <Card.Text>Routine Name: {routine.name}</Card.Text>
                                <Card.Text>Routine Goal: {routine.goal}</Card.Text>
                                <Card.Text>Creator Name: {routine.creatorName}</Card.Text>
                                <h3 id='activities-title'>Activities For Routines</h3>


                                {routine.activities && routine.activities.map((activity, index) => {
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
                    }
                }
            })}
        </Form>
    );
}


export default MyRoutines
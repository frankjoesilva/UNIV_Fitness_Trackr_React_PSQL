import React, { useState, useEffect } from 'react'
import { getRoutinesByUsername, postRoutines, } from '../api/routines'
import { getActivities } from '../api/activities'
import { postActivityCountAndDuration } from '../api/routine_activities'
// import { postCountAndDuration } from '../api/routine_activities'
import { Card, Form, Button, CardDeck, Container, Dropdown, Accordion } from 'react-bootstrap'
import './MyRoutines.css'



const MyRoutines = ({
    userToken,
    user,
    // activityId,
    // routineId,
    // routines,
    // activities

}) => {
    const [activities, setActivities] = useState([])
    const [description, setDescription] = useState([])
    const [activityName, setActivityName] = useState([])
    const [myRoutines, setMyRoutines] = useState([])
    const [activityDuration, setActivityDuration] = useState('')
    const [activityCount, setActivityCount] = useState('')
    const [routineName, setRoutineName] = useState('')
    const [routineGoal, setRoutineGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)
    const [error, setError] = useState('')



    useEffect(() => {
        if (userToken) {
            getRoutinesByUsername(user.username, userToken)
                .then(myRoutines => {
                    console.log(myRoutines)
                    setMyRoutines(myRoutines)
                })
                .catch(error => {
                    console.error(error)
                });
        }

    }, [userToken, user.username]);

    useEffect(() => {
        getActivities()
            .then(activities => {
                console.log(activities, "xx")
                setActivities(activities)
            })
            .catch(error => {
                console.error(error)
            });
    }, [userToken, user]);



    return (
        <Form
            onSubmit={async (event) => {
                event.preventDefault()
                setRoutineName('')
                setRoutineGoal('')
                setActivityDuration('')
                setActivityCount('')
                setActivityName([])
                setDescription([])
                try {
                    const addCountAndDuration = await postActivityCountAndDuration(activityCount, activityDuration, userToken, user.id)
                    const addRoutine = await postRoutines(routineName, routineGoal, isPublic, userToken, user.id)
                    if (routineName === '' || routineGoal === '' || activityCount === '' || activityDuration === '') {
                        setError('Missing Fields')
                    } else {
                        setMyRoutines([...myRoutines, addRoutine])
                            &&
                            setActivities([...activities, addCountAndDuration])

                    }
                } catch (error) {
                    console.error(error)
                }
            }}
            className='my-routines'>

            {userToken ? <>


                <Container id="add-routines">
                    <Form.Group controlId="routineName">

                        <Form.Control value={routineName} type="text" placeholder="Routine Name" onChange={(event) => {
                            const routineName = event.target.value
                            setRoutineName(routineName)
                        }} />

                        {error ? <div>{error}</div> : null}

                    </Form.Group>

                    <Form.Group controlId="routineGoal">
                        <Form.Control value={routineGoal} type="text" placeholder="Description" onChange={(event) => {
                            const goal = event.target.value
                            setRoutineGoal(goal)
                        }} />
                    </Form.Group>
                    <p id="routine-act">Activities for Routine</p>

                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-button-dark-example1"
                            variant="secondary"
                            value={activities}
                        >
                            {activityName}

                            {description}
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            {activities.map((activity) => {

                                return (<Dropdown.Item
                                    key={activity.id}
                                    type='Name'
                                    onClick={(event) => {
                                        const actAndDescription = event.target.outerText
                                        console.log(actAndDescription)
                                        setActivityName(actAndDescription)
                                        setDescription(actAndDescription)
                                    }}
                                >
                                    <div>
                                        <p id='act-drp-dwn'>{activity.name}</p>
                                        <p id='act-drp-dwn'>{activity.description}</p>
                                    </div>
                                </Dropdown.Item>)
                            })}
                            <Dropdown.Divider />
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Group controlId="activityCount">

                        <Form.Control value={activityCount} type="string" placeholder="Count" onChange={(event) => {
                            const count = event.target.value
                            setActivityCount(count)
                        }} />

                    </Form.Group>

                    <Form.Group controlId="activityDuration">

                        <Form.Control value={activityDuration} type="string" placeholder="Duration" onChange={(event) => {
                            const duration = event.target.value
                            setActivityDuration(duration)
                        }} />

                    </Form.Group>


                    <Form.Check value={isPublic} id='checkbox' className='m-auto' style={{ color: 'limegreen' }} type="checkbox" label="Public" onChange={() => {

                        setIsPublic(!isPublic)
                    }} />

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Container>
            </> : null
            }
            <div className='my-routine-card'>
                {
                    myRoutines.map((routine) => {
                        if (user.id === routine.creatorId) {
                            // console.log(routine)

                            return (
                                <CardDeck key={routine.id}>
                                    <Container>
                                        <Accordion>

                                            <Card id="myRoutines-card"
                                                className="focus mt-2 mb-2"
                                            >
                                                <Card.Body id='card-container'>
                                                    <Card.Header className="text-center  card-header">My Routines </Card.Header>
                                                    <Card.Text className="ml-auto">Routine Name: {routine.name}</Card.Text>
                                                    <Card.Text className="ml-auto">Routine Goal: {routine.goal}</Card.Text>

                                                    <Accordion.Toggle
                                                        id='toggle'
                                                        as={Card.Header}
                                                        eventKey="0"
                                                        className="p-2 text-center accordian-main"
                                                    >
                                                        ACTIVITY DETAILS
                                                    </Accordion.Toggle>
                                                    {routine.activities && routine.activities.map((activity, index) => {

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
                                                    <div id='edit-delete-btn'>
                                                        <Button id='delete-btn' style={{ width: '5.5rem', background: 'red' }} variant="primary" onClick={async () => { }}>
                                                            DELETE
                                                        </Button>
                                                        <Button id='edit-btn' style={{ width: '5.5rem', background: 'red' }} variant="primary" onClick={async () => { }}>
                                                            EDIT
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Accordion>
                                    </Container>
                                </CardDeck>
                            )
                        }
                        else {
                            return null
                        }

                    })}
            </div>
        </Form >
    );
}


export default MyRoutines



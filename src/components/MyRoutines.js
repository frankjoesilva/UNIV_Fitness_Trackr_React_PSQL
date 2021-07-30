import React, { useState, useEffect } from 'react'
import { getRoutinesByUsername, postRoutines, } from '../api/routines'
import { getActivities, postActivities } from '../api/activities'
// import { postCountAndDuration } from '../api/routine_activities'
import { Card, Form, Button, CardDeck, Container, Dropdown } from 'react-bootstrap'
import './MyRoutines.css'



const MyRoutines = ({
    userToken,
    user

}) => {
    const [activities, setActivities] = useState([])
    const [description, setDescription] = useState([])
    const [activityName, setActivityName] = useState([])
    const [myRoutines, setMyRoutines] = useState([])
    // const [myDuration, setMyDuration] = useState('')
    // const [myCount, setMyCount] = useState('')
    const [routineName, setRoutineName] = useState('')
    const [routineGoal, setRoutineGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false)


    useEffect(() => {
        if (userToken) {
            getRoutinesByUsername(user.username, userToken)
                .then(routines => {
                    console.log(routines)
                    setMyRoutines(routines)
                })
                .catch(error => {
                    console.error(error)
                });
        }

    }, [userToken, user]);

    useEffect(() => {
        getActivities()
            .then(activities => {
                // console.log(activities, "xxx")
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
                setRoutineName('')
                setRoutineGoal('')
                // setMyDuration('')
                // setMyCount('')
                setActivityName([])
                setDescription([])
                try {
                    const updateActivity = await postRoutines(routineName, routineGoal, isPublic, userToken, user.id)
                    setMyRoutines([...myRoutines, updateActivity])
                    const data = await getActivities(activityName, description, userToken)
                    setActivities([...activities, data])
                    const postData = await postActivities(activityName, description, userToken)
                    setActivities([...activities, postData])
                    // const updateCountAndDur = await postCountAndDuration(myCount, myDuration, userToken)
                    // setMyCount([...myCount, updateCountAndDur])
                    // setMyDuration([...myDuration, updateCountAndDur])
                } catch (error) {
                    console.error(error)
                }
            }}
            className='my-routines'>

            {userToken ? <>


                <Container id="add-routines">
                    <Form.Group controlId="routineName">

                        <Form.Control value={routineName} type="Name" placeholder="Routine Name" onChange={(event) => {
                            const routine = event.target.value
                            setRoutineName(routine)
                        }} />

                    </Form.Group>

                    <Form.Group controlId="routineGoal">
                        <Form.Control value={routineGoal} type="Description" placeholder="Description" onChange={(event) => {
                            const goal = event.target.value
                            setRoutineGoal(goal)
                        }} />
                    </Form.Group>

                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-button-dark-example1"
                            variant="secondary"
                            value={activityName}
                        >
                            {activityName}
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            {activities.map((activity) => {

                                return (<Dropdown.Item
                                    key={activity.id}
                                    type='Name'
                                    onClick={(event) => {
                                        const actName = event.target.outerText
                                        console.log(actName)
                                        setActivityName(actName)
                                    }}
                                >
                                    {activity.name}
                                </Dropdown.Item>)
                            })}
                            <Dropdown.Divider />
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-button-dark-example1"
                            variant="secondary"
                            value={description}
                        >
                            {description}
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            {activities.map((activity) => {
                                return (<Dropdown.Item key={activity.id} value={description}
                                    onClick={(event) => {
                                        const actDescription = event.target.outerText
                                        setDescription(actDescription)
                                    }}>
                                    {activity.description}
                                </Dropdown.Item>)
                            })}
                            <Dropdown.Divider />
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* <Form.Group controlId="myDuration">

                        <Form.Control value={myDuration} type="string" placeholder="Duration" onChange={(event) => {
                            const duration = event.target.value
                            setMyDuration(duration)
                        }} />

                    </Form.Group> */}


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
                                <CardDeck
                                    key={routine.id}>
                                    <Container>
                                        <Card id="myRoutines-card"
                                            className="focus mt-2 mb-2"
                                        >
                                            <Card.Body>
                                                <Card.Header className="text-center  card-title">My Routines </Card.Header>
                                                <Card.Text className="text-center">Routine Name: {routine.name}</Card.Text>
                                                <Card.Text className="text-center">Routine Goal: {routine.goal}</Card.Text>
                                                <Card.Header className="text-center  card-title">Activities For Routines </Card.Header>

                                                {/* <h3 id='activities-title'>Activities For Routines</h3> */}
                                                {routine.activities && routine.activities.map((activity, index) => {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <Card.Title className="text-center  card-title">Activity Name: {activity.name}</Card.Title>
                                                            <Card.Text className="text-center  card-title">Activity Description{activity.description}</Card.Text>
                                                            <Card.Text className="text-center">Activity Duration: {activity.duration}</Card.Text>
                                                            <Card.Text className="text-center">Activity Count: {activity.count}</Card.Text>
                                                        </React.Fragment>
                                                    )
                                                })}
                                                <div>
                                                    <Button id='delete-btn' style={{ width: '6rem', background: 'red' }} variant="primary" onClick={async () => { }}>
                                                        DELETE
                                                    </Button>
                                                    <Button id='edit-btn' style={{ width: '6rem', background: 'red' }} variant="primary" onClick={async () => { }}>
                                                        EDIT
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Container>

                                </CardDeck>
                            )
                        }
                        else {
                            return null
                        }

                    })
                }
            </div>
        </Form >
    );
}


export default MyRoutines


// return (
//     <>

//         {
//             myRoutines === 'not set' || myRoutines === null
//                 ? <p>No routines added yet.</p>
//                 :
//                 <TableContainer component={Paper} >
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Name</TableCell>
//                                 <TableCell>Goal</TableCell>
//                                 <TableCell>Duration</TableCell>
//                                 <TableCell>Actions</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {
//                                 Object.values(myRoutines).map((myRoutine, i) => {
//                                     let { name, goal, duration } = myRoutine
//                                     switch (myRoutine.goal) {
//                                         case 1:
//                                             goal = "Lifting weights";
//                                             break;
//                                         case 2:
//                                             goal = "Running";
//                                             break;
//                                         case 3:
//                                             goal = "Cycling";
//                                             break;
//                                         default:
//                                             goal = "Not set";
//                                     };
//                                     return (
//                                         <TableRow key={i}>
//                                             <TableCell>{name}</TableCell>
//                                             <TableCell>{goal}</TableCell>
//                                             <TableCell>{duration}</TableCell>
//                                             <TableCell>

//                                             </TableCell>
//                                         </TableRow>
//                                     );
//                                 })
//                             }
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//         }
//     </>
// )
// };

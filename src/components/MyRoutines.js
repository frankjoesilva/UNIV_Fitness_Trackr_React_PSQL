import React, { useState, useEffect } from 'react'
import { getRoutinesByUsername, postRoutines } from '../api/routines'

import { Card, Form, Button, CardDeck, Container, Col, Row } from 'react-bootstrap'
import './MyRoutines.css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
            getRoutinesByUsername(user.username, userToken)
                .then(routines => {
                    setMyRoutines(routines)
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }, [userToken, user]);


    return (
        <Form
            onSubmit={async (event) => {
                event.preventDefault()
                setRoutineName('')
                setRoutineGoal('')
                try {
                    const updateActivity = await postRoutines(routineName, routineGoal, isPublic, userToken)
                    setMyRoutines([...myRoutines, updateActivity])

                } catch (error) {
                    console.error(error)
                }
            }}
            className='my-routines'>

            {userToken ? <>

                <h3 id='newRoutineTitle'>Add New Routines</h3>
                <Container>
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
                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Form.Group>
                </Container>
            </> : null
            }
            {myRoutines.map((routine) => {
                if (user.id === routine.creatorId) {


                    return (
                        <CardDeck>
                            <Card className="focus mt-2 mb-2"
                                key={routine.id}
                                style={{ width: '23rem' }}>
                                <Card.Body>
                                    <Card.Title className="text-center  card-title">My Routines:</Card.Title>
                                    <Card.Text className="text-center">Routine Name: {routine.name}</Card.Text>
                                    <Card.Text className="text-center">Routine Goal: {routine.goal}</Card.Text>
                                    <Card.Text className="text-center">Creator Name: {routine.creatorName}</Card.Text>
                                    <h3 id='activities-title'>Activities For Routines</h3>


                                    {routine.activities && routine.activities.map((activity, index) => {
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
                        </CardDeck>)
                }

            })}
        </Form>
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

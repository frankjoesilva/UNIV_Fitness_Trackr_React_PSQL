import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { Card, CardDeck } from 'react-bootstrap'
import './Routines.css'

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';


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
            <h2 className="text-center font-details-b pb-4">Routines</h2>
            {routines.map((routine) => {
                return (<CardDeck>
                    <Card className="focus mt-2 mb-2"
                        key={routine.id}
                        style={{ width: '23rem' }}>

                        <Card.Body>
                            <Card.Title className="text-center  card-title">Creator Name: {routine.creatorName}</Card.Title>
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
                </CardDeck>)
            })}
        </div>
    );
}

export default PublicRoutines

// const PublicRoutines = () => {
//     const [routines, setRoutines] = useState([])

//     useEffect(() => {
//         getRoutines()
//             .then(routines => {
//                 setRoutines(routines)
//             })
//             .catch(error => {
//                 console.error(error)
//             });
//     }, []);
//     return (
//         <>

//             {
//                 routines === 'not set' || routines === null
//                     ? <p>No routines added yet.</p>
//                     :
//                     <TableContainer component={Paper} >
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>Name</TableCell>
//                                     <TableCell>Goal</TableCell>
//                                     <TableCell>Duration</TableCell>
//                                     <TableCell>Actions</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {
//                                     Object.values(routines).map((routine, i) => {
//                                         let { name, goal, duration } = routine
//                                         switch (routine.goal) {
//                                             case 1:
//                                                 goal = "Lifting weights";
//                                                 break;
//                                             case 2:
//                                                 goal = "Running";
//                                                 break;
//                                             case 3:
//                                                 goal = "Cycling";
//                                                 break;
//                                             default:
//                                                 goal = "Not set";
//                                         };
//                                         return (
//                                             <TableRow key={i}>
//                                                 <TableCell>{name}</TableCell>
//                                                 <TableCell>{goal}</TableCell>
//                                                 <TableCell>{duration}</TableCell>
//                                                 <TableCell>

//                                                 </TableCell>
//                                             </TableRow>
//                                         );
//                                     })
//                                 }
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//             }
//         </>
//     )
// };


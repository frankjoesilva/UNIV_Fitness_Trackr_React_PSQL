import React, { useState, useEffect } from 'react'
import { getRoutines } from '../api/routines'
import { Card } from 'react-bootstrap'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
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
            <h2 id="routine-title">Routines</h2>
            {routines.map((routine) => {
                return (

                    <Card
                        className="focus mt-2 mb-2"
                        key={routine.id}
                        style={{ width: '23rem' }}>
                        <Card.Body>
                            <Card.Title className="text-center  card-title" >Routine</Card.Title>
                            <Card.Header className="text-center  card-header" id="creator-name">Creator Name: {routine.creatorName}</Card.Header>
                            <Card.Text>Routine Name: {routine.name}</Card.Text>
                            <Card.Text>Goal:{routine.goal}</Card.Text>
                            <Card.Title className="text-center  card-title" id="activity-routine-title">Activities For Routines</Card.Title>
                            {routine.activities.map((activity, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Card.Title className="text-center  card-title">Activity Name: {activity.name}</Card.Title>
                                        <Card.Text className="card-text d-flex justify-content-start flex-column">Activity Duration: {activity.duration}</Card.Text>
                                        <Card.Text className="card-text d-flex justify-content-start flex-column">Activity Count: {activity.count}</Card.Text>
                                    </React.Fragment>
                                )
                            })}
                        </Card.Body>

                    </Card>)
            })}
        </div>
    );
}


export default PublicRoutines

// const publicRoutines = () => {
//     const [routines, setRoutines] = useState([])

//     useEffect(() => {
//                 getRoutines()
//                     .then(routines => {
//                         setRoutines(routines)
//                     })
//                     .catch(error => {
//                         console.error(error)
//                     });
//     }, []);

//     return (
//             <div className='public-routines'>
//                 <h2 id="routine-title">Routines</h2>
//                 {routines.map((routine) => {
//                     return (<Card id="routine-card"
//                         key={routine.id}
//                         style={{ width: '23rem' }}>

//                         <Card.Body>
//                             <h2 id="routine-card-title">Routines</h2>
//                             <Card.Title id="creator-name">Creator Name: {routine.creatorName}</Card.Title>
//                             <Card.Text>Routine Name: {routine.name}</Card.Text>
//                             <Card.Text>Goal:{routine.goal}</Card.Text>
//                             <h4 id="activity-routine-title">Activities For Routines</h4>
//                             {routine.activities.map((activity, index) => {
//                                 return (
//                                     <React.Fragment key={index}>
//                                         <Card.Title id="activity-name">Activity Name: {activity.name}</Card.Title>
//                                         <Card.Text>Activity Duration: {activity.duration}</Card.Text>
//                                         <Card.Text>Activity Count: {activity.count}</Card.Text>
//                                     </React.Fragment>
//                                 )
//                             })}
//                         </Card.Body>
//                     </Card>)
//                 })}
//             </div>
//     );
// }


// export default publicRoutines
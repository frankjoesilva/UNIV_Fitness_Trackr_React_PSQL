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
        <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">Routines</h1>

            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title className="text-center  card-title">Routine</Card.Title>
                        <hr />
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    );
}


export default PublicRoutines

//     < div className = "pt-3 pb-3" >
//         <h1 className="text-center font-details-b pb-4">Routines</h1>
// {
//     routines.map((routine) => { * /}
//         return (

//             <Card border="dark" id="routine-card"
//                 key={routine.id}
//                 style={{ width: '18rem' }}>
//                 <Card.Header id="routine-card-title">Routines</Card.Header>
//                 <Card.Body>
// //         //                     <Card.Title id="creator-name">Creator Name: {routine.creatorName}</Card.Title>
// //         //                     <Card.Text>Routine Name: {routine.name}</Card.Text>
// //         //                     <Card.Text>Goal:{routine.goal}</Card.Text>
// //         //                     <Card.Header id="activity-routine-title">Activities For Routines</Card.Header>
// //         //                     {routine.activities.map((activity, index) => {
//         //                         return (
//         //                             <React.Fragment key={index}>
//         //                                 <Card.Title id="activity-name">Activity Name: {activity.name}</Card.Title>
//         //                                 <Card.Text>Activity Duration: {activity.duration}</Card.Text>
//         //                                 <Card.Text>Activity Count: {activity.count}</Card.Text>
//         //                             </React.Fragment>
//         //                         )
//         //                     })}
//         //                 </Card.Body>
//         //             </Card>)

//         //     })}
//         // </div> */}


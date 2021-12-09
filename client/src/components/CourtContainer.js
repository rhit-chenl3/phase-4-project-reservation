import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function CourtContainer() {
// const [courts, setCourts] = useState([])

// useEffect(() => {
// fetch("/courts")
// .then(response => response.json())
// .then(data => setCourts(data))
// }, [])

// const displayCourts = courts.map(court => {
//   return ( <ul key={court.id}> {court.name} {court.location} {court.time}pm {court.charge_per_hour}$ </ul>)

// })
//     return (
//     <div>
//          {displayCourts}
//     </div>
       
//     )
// }


const [courts, setCourts] = useState([])

useEffect(() => {
fetch("/courts")
.then(response => response.json())
.then(data => setCourts(data))
    }, [])

    return (
   <div className="app-container">
    <table> 
    <thead>
<tr>
    <th> Name</th>
    <th> Location</th>
    <th> time</th>
    <th> Hourly Rate</th>
    <th> Team ID</th>
    <th> Referee ID</th>
</tr>
    </thead>
    <tbody>
        {courts.map((court) => (
        <tr>
            <td>{court.name}</td>
            <td>{court.location}</td>
            <td>{court.time} PM</td>
            <td>${court.charge_per_hour}</td>
            <td>{court.team.name}</td>
            <td>{court.arbiter.name}</td>
        </tr> 
        ))}
    </tbody>
        </table>    
        </div>
    );    
};
    

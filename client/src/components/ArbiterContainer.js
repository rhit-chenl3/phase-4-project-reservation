import { useState } from 'react'
import { useEffect } from 'react'


export default function ArbiterContainer() {
// const [arbiters, setArbiter] = useState([])

// useEffect(() => {
// fetch("/arbiters")
// .then(response => response.json())
// .then(data => setArbiter(data))
// }, [])
   
// const refDetails1 = arbiters.map(arbiter => {
//     return <ul key={arbiter.id}> {arbiter.name} </ul>
// })
// const refDetails2 = arbiters.map(arbiter => {
//     return <ul key={arbiter.id}>  {arbiter.hourly_cost}$</ul>
// })
// const refDetails3 = arbiters.map(arbiter => {
//     return <ul key={arbiter.id}> {arbiter.email} </ul>
// })
// const refDetails4 = arbiters.map(arbiter => {
//     return <ul key={arbiter.id}>  {arbiter.phone}</ul>
// })

// return  <table className="app-container"> 
//     <thead>
// <tr>
//     <th> Name</th>
//     <th> Hourly Rate</th>
//     <th> Email</th>
//     <th> Phone Number</th>
// </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>{refDetails1}</td>
//             <td>{refDetails2}</td>
//             <td>{refDetails3}</td>
//             <td>{refDetails4}</td>
//         </tr>
//     </tbody>
//         </table>    
// }






const [arbiters, setArbiter] = useState([])

useEffect(() => {
    fetch("/arbiters")
    .then(response => response.json())
    .then(data => setArbiter(data))
    }, [])

    return  (
    <div className="app-container">
    <table> 
    <thead>
<tr>
    <th> Name</th>
    <th> Hourly Rate</th>
    <th> Email</th>
    <th> Phone Number</th>
</tr>
    </thead>
    <tbody>
        {arbiters.map((arbiter) => (
        <tr>
            <td>{arbiter.name}</td>
            <td>${arbiter.hourly_cost}</td>
            <td>{arbiter.email}</td>
            <td>{arbiter.phone}</td>
        </tr> 
        ))}
    </tbody>
        </table>    
        </div>
    );
};

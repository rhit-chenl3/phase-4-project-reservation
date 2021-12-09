import React from 'react'
import { useEffect,useState } from 'react'

export default function TeamContainer() {
    const [teams, setTeams] = useState([])
    const [addTeam, setAddTeams] = useState({
        name: "" ,
        email: ""
    })

const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addTeam};
    newFormData[fieldName] = fieldValue

    setAddTeams(newFormData)

    
};
const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newTeam = {   
        // name: newFormData.name,
        // email: newFormData.address
    }
    const newTeams = [...teams, newTeam]
    setTeams(newTeams)
    
}


    useEffect(() => {
    fetch("/teams")
    .then(response => response.json())
    .then(data => setTeams(data))
        }, [])
    
        return (
       <div className="app-container">
        <table> 
        <thead>
    <tr>
        <th> Name</th>
        <th> Email</th>
    </tr>
        </thead>
        <tbody>
            {teams.map((team) => (
            <tr>
                <td>{team.name}</td>
                <td>{team.email}</td>
            </tr> 
            ))}
        </tbody>
            </table>    
            <h2> Add a Team </h2>
            <form onSubmit={handleAddFormSubmit}>
              <input type="text" name="name" required="required" placeholder="Enter a Team Name" onChange={handleAddFormChange}/>  
              <input type="email" name="email" required="required" placeholder="Enter Email" onChange={handleAddFormChange}/>  
              <button type="submit"> Submit </button>
            </form>
            </div>
        );    
    };


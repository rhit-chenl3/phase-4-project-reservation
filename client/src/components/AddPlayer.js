import React from 'react'

export default function AddPlayer() {
    return (
        <div>
             <h2> Add a Team </h2>
            <form onSubmit={handleAddFormSubmit}>
              <input type="text" name="name" required="required" placeholder="Enter a player Name" onChange={handleAddFormChange}/>  
              <input type="text" name="jersey_num" required="required" placeholder="Enter Jersey number" onChange={handleAddFormChange}/>  
              <input type="text" name="points" required="required" placeholder="Points scored" onChange={handleAddFormChange}/>  
              <input type="text" name="assists" required="required" placeholder="Assists" onChange={handleAddFormChange}/>  
              <input type="text" name="rebounds" required="required" placeholder="Rebounds" onChange={handleAddFormChange}/>  
              <input type="text" name="turnovers" required="required" placeholder="Turnovers (Russell Westbrook lol)" onChange={handleAddFormChange}/>  
              <input type="text" name="fouls" required="required" placeholder="fouls" onChange={handleAddFormChange}/>  
              <input type="text" name="steals" required="required" placeholder="steals" onChange={handleAddFormChange}/>  
              <input type="text" name="fg_a" required="required" placeholder="fg_a" onChange={handleAddFormChange}/>  
              <input type="text" name="fg_m" required="required" placeholder="fg_m" onChange={handleAddFormChange}/>  
              <input type="text" name="threept_a" required="required" placeholder="Three Point Assists" onChange={handleAddFormChange}/>  
              <input type="text" name="threept_m" required="required" placeholder="Three points Made" onChange={handleAddFormChange}/>  
              <input type="text" name="min_played" required="required" placeholder="Minutes Played" onChange={handleAddFormChange}/>  
              <button type="submit"> Submit </button>
            </form>
        </div>
    )
}

import React from 'react'

export default function CourtList({courts}) {
   const displayCourts = courts.map(court => {
       return (court={court})
   }
    )
   
    return (
        <div>
            <ul> {displayCourts} </ul>
        </div>
    )
}

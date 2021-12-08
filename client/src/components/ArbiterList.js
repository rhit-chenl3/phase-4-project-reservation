import React from 'react'

export default function ArbiterList({arbiters}) {
   const displayArbiters = arbiters.map(arbiter => {
        return {arbiter}
   })
   
    return (
        <div>
            <ul> {displayArbiters} </ul>
        </div>
    )
}

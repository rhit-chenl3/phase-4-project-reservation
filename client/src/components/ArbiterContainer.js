import React from 'react'
import ArbiterList from './ArbiterList'
import { useState, useEffect } from 'react'

export default function ArbiterContainer() {
const [arbiters, setArbiter] = useState([])

useEffect(() => {
fetch("/arbiters")
.then(response => response.json())
.then(data => setArbiter(data))
}, [])

return (
        <div>
            <ArbiterList arbiters={arbiters}/>
        </div>
    )
}

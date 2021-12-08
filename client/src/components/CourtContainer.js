import React from 'react'
import CourtList from './CourtList'
import { useState } from 'react'
import { useEffect } from 'react'

export default function CourtContainer() {
const [courts, setCourts] = useState([])

useEffect(() => {
fetch("/courts")
.then(response => response.json())
.then(data => setCourts(data))
}, [])
    return (
        <div>
            <CourtList courts={courts}/>
        </div>
    )
}

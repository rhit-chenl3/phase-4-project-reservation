
import React, { useEffect, useState } from "react";
import ArbiterList from './ArbiterList'
import CourtList from './CourtList'

export default function ArbiterContainer() {
const [arbiter, setArbiter] = useState([])

useEffect(() => {
fetch("/arbiters")
.then(response => response.json())
.then(data => setArbiter(data))
}, [])

return (
        <div>
            <ArbiterList/>
        </div>
    )
}

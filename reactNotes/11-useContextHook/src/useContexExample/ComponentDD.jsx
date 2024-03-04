import React, { useContext } from "react"
import { UserContext } from "./ComponentAA"

function ComponentDD () {

    const user = useContext(UserContext)

    return (
        <div className="container-AA">
            <h1>ComponentDD</h1>
            <h2>Bye {user}</h2>
        </div>
    )
}

export default ComponentDD
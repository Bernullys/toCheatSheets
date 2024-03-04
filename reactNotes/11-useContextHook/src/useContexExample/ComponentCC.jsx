import React, { useContext } from "react"
import { UserContext } from "./ComponentAA"
import ComponentDD from "./ComponentDD"



function ComponentCC () {

    const user = useContext(UserContext)



    return (
        <div className="container-AA">
            <h1>ComponentCC</h1>
            <h2>Hello again {user}</h2>
            <ComponentDD />
        </div>
    )
}

export default ComponentCC
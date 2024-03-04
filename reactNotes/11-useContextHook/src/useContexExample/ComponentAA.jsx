import { useState, createContext } from "react"
import ComponentBB from "./ComponentBB"

export const UserContext = createContext()

function ComponentAA () {

    const [user, setUser] = useState("Bernardo")

    return (
        <div className="container-AA">
            <h1>ComponentAA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user} >
                <ComponentBB user={user}/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentAA
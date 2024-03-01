import ComponentB from "./ComponentB"

function ComponentA () {

    const user = "Bernardo"

    return (
        <div className="component-container">
            <h1>ComponentA</h1>
            <p>{`Hello ${user}`}</p>
            <ComponentB user={user}/>
        </div>
    )
}

export default ComponentA
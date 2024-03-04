import ComponentD from "./ComponentD"

function ComponentC (props) {
    return (
        <div className="component-container">
            <h1>ComponentC</h1>
            <ComponentD user={props.user}/>
        </div>
    )
}

export default ComponentC
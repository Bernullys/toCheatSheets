import ComponentC from "./ComponentC"

function ComponentB (props) {
    return (
        <div className="component-container">
            <h1>ComponentB</h1>
            <ComponentC user={props.user}/>
        </div>
    )
}

export default ComponentB
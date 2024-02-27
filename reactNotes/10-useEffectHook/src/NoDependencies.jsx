import { useState, useEffect } from "react"

function NoDependencies () {
    
    const [ count, setCount] = useState(0)
    
    // We can run a side code everytime p component re-render

    useEffect(() => {
        document.title = `side effect from a function ${count}`
    })

    function addCount () {
        setCount(c => c + 1) 
    }
    

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button> 
        </>
    )
}

export default NoDependencies
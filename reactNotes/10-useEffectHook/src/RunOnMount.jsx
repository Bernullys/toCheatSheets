import { useState, useEffect } from "react"

function RunOnMount () {
    
    const [ count, setCount] = useState(0)
    
    // This time is executing the function right away when run the code.

    useEffect(() => {
        document.title = `side effect from a function ${count}`
    }, [])

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

export default RunOnMount
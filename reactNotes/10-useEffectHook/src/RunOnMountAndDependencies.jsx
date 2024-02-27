import { useState, useEffect } from "react"

function RunOnMountAndDependencies () {
    
    const [ count, setCount] = useState(0)
    const [ color, setColor] = useState("green")
    
    // This time is executing the function right away when run the code.

    // We can achive the same without using useEffect but using it has severals advantages:
        //You can tell when exactly this code run (re-render, mounts or mount+change)
        //So it can perform some code in certains situations and after that we can run some cleanup code.

    useEffect(() => {
        document.title = `side effects ${count} ${color}`
    }, [count, color])

    function addCount () {
        setCount(c => c + 1) 
    }
    
    function substractCount () {
        setCount(c => c -1)
    }

    function changeColor () {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
        <>
            <p style={{color: color}}>Count: {count} {color}</p>
            <button onClick={addCount}>Add</button><br />
            <button onClick={substractCount}>Substract</button><br />
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default RunOnMountAndDependencies
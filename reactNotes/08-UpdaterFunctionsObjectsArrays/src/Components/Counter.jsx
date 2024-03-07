import {useState} from "react"

function Counter () {

    const [count, setCount] = useState(0)

    function counterUp () {
        setCount(c => c + 1) //By convention, it's common to name the pending state argument for the first letter of the state variable name like a for age. However, you may also call it like prevAge or something else that you find clearer.

        //Takes the PENDING state to calculate NEXT state.
        //React puts your updater function in a queue (waiting in line).
        //During the next render, it will call them in the same order.
    }

    function counterReset () {
        setCount(0)
    }

    function counterDown () {
        setCount(c => c - 1)
    }

    return (
        <section>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={counterUp}>Add</button>
            <button onClick={counterReset}>Reset</button>
            <button onClick={counterDown}>Substract</button>

        </section>
    )
}

export default Counter
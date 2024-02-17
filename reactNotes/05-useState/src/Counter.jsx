import { useState } from "react"

function Counter () {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count + 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    const decrementCount = () => {
        setCount( count - 1)
    }

    return (
        <section>
            <h2>{count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={decrementCount}>Decrement</button>
        </section>
    )
}

export default Counter
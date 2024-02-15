function Lists () {

    const fruits = ["Orange", "Guayaba", "Mora", "Lechoza", "Mango"]

    // The second argument of a map function is index.
    const fruitsList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
    //However, if fruits comes from an API or other external source, it's better to use a unique ID or key from that source, if available. Using the index as the key should only be a last resort.

    return (
        <ol>
            <h4>This is an example of rendering an array</h4>
            {fruitsList}
        </ol>
    )
}

export default Lists
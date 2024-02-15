function ListsOfObjects () {

    const fruits = [{id: 1, name: "Orange", calories: 95}, 
                    {id: 2, name: "Guayaba", calories: 45}, 
                    {id: 3, name: "Mora", calories: 105}, 
                    {id: 4, name: "Lechoza", calories: 159}, 
                    {id: 5, name: "Mango", calories: 37}]

    //Sort alphabetical:
    //fruits.sort((a, b) => a.name.localeCompare(b.name))
    //Sort reverse alphabetical:
    //fruits.sort((b, a) => a.name.localeCompare(b.name))
    //Sort by calories:
    //fruits.sort((a, b) => a.calories - b.calories)
    //Sort by reverse calories:
    //fruits.sort((b, a) => a.calories - b.calories)

    //filtering:
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 50)



    const fruitsList = lowCalFruits.map( fruit => <li key={fruit.id}>
                                                This {fruit.name} fruit has these calories: {fruit.calories}</li>)


    return (
        <ol>
            <h4>These are examples of rendering and manipulating objects</h4>
            {fruitsList}
        </ol>
    )
}

export default ListsOfObjects
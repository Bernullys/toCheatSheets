import {useState} from "react"

function UpdatingArrays () {

    const [fruits, setFruits] = useState(["Apple", "Orange", "Grape"])

    const addFruit = () => {
        //this is a different aproach of how I would do it:
        const newFruit= document.getElementById("add-fruits").value
        document.getElementById("add-fruits").value = ""
        console.log(newFruit)
        setFruits(f => [...f, newFruit])
    }

    //I really have to analized this function because blow my mind
    const deleteFruit = (index) => {
        setFruits(fruits.filter((_, i) => i !== index))
    }



    return (
        <section>
            <h3>Updating arrays</h3>
            <ul>
                {
                    fruits.map((fruit, index) => <li key={index}
                                                    onClick={()=>deleteFruit(index)}>
                                                    {fruit}
                                                </li>)
                }
            </ul>
            <input type="text" name="" id="add-fruits" placeholder="type the fruit you want to add"/>
            <button onClick={addFruit}>Add Fruit</button>


        </section>
    )
}

export default UpdatingArrays
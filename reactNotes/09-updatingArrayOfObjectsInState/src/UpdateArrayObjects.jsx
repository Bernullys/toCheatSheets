import { useState } from "react"

function UAOO () {

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carBrand, setCarBrand] = useState()
    const [carModel, setCarModel] = useState()

    const addCar = () => {
        const newCar = {year: carYear, brand: carBrand, model: carModel}
        setCars(c => [...cars, newCar])
        setCarYear(new Date().getFullYear())
        setCarBrand("")
        setCarModel("")
    }

    const removeCar = (index) => {
        setCars(cars.filter((_, i) => i !== index))
    }

    const handleYear = (event) => {
        setCarYear(event.target.value)
    }

    const handleBrand = (event) => {
        setCarBrand(event.target.value)
    }

    const handleModel = (event) => {
        setCarModel(event.target.value)
    }

    return (
        <section>
            <h1>This is an Array of Objects</h1>
            <ul>
                {
                    cars.map((car, index) => <li key={index}
                                                onClick={() => removeCar(index)}>
                                                {`This is a ${car.model} ${car.brand} from ${car.year}`}
                                            </li> )
                }
            </ul>
            <input type="number" value={carYear} onChange={handleYear}/> <br />
            <input type="text" value={carBrand} placeholder="Enter a card brand" onChange={handleBrand}/> <br />
            <input type="text" value={carModel} placeholder="Enter a card model" onChange={handleModel}/> <br />
            <button onClick={addCar}>Add Card</button>
        </section>
    )
}

export default UAOO
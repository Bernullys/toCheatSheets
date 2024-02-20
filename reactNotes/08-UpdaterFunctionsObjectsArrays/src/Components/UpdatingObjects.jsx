import {useState} from "react"

function UpdatingObjects () {

    const [car, setCar] = useState({year: "2024", brand:"Ferrari", model:"Enzo"})

    function handleYear (event) {
        setCar(c => ({...c, year: event.target.value}))
    }

    const handleBrand = (event) => {
        setCar(c => ({...c, brand: event.target.value}))
    }

    const handleModel = (event) => {
        setCar(c => ({...c, model: event.target.value}))
    }

    return (
        <section>
            <h2>Updating objects</h2>
            <h2>My favory car is a {car.year} {car.brand} {car.model}</h2>
            <input type="number" value={car.year} onChange={handleYear}/>
            <input type="text" value={car.brand} onChange={handleBrand}/>
            <input type="text" value={car.model} onChange={handleModel}/>
        </section>
    )
}

export default UpdatingObjects
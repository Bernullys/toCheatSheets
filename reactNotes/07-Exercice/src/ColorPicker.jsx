import {useState} from "react"

function ColorPicker () {

    const [color, setColor] = useState()
    
    const handleColor = (event) => {
        setColor(event.target.value)
    }

    return (
        <section className="color-picker-main-container">
            <h1>Color Picker App</h1>
            <article className="color-picked" style={{backgroundColor: color}}>
                <h3>Selected color: {color}</h3>
            </article>
            <label htmlFor="">Pick a color</label>
            <input type="color" value={color} onChange={handleColor}/>
        </section>
    )
}

export default ColorPicker
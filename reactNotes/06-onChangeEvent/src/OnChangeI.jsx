import { useState } from "react"

function OnchangeI () {
    
    const [name, setName] = useState("Guest")
    const [num, setNum] = useState(0)
    const [message, setMessage] = useState("")
    const [cardSelection, setCardSelection] = useState("")
    const [haveBy, setHaveBy] = useState()

    function handleName (event) {
        setName(event.target.value)
    }
    const handleNumber = (event) => {
        setNum(event.target.value)
    }
    const handleMessage = (event) => {
        setMessage(event.target.value)
    }
    const handlePayCard = (event) => {
        setCardSelection(event.target.value)
    }
    const handleHaveBy = (event) => {
        setHaveBy(event.target.value)
    }


    return (
        <section>
            <input type="text" onChange={handleName}/>
            <p>Your Name: {name}</p>

            <input type="number" onChange={handleNumber} />
            <p>Your number: {num}</p>

            <textarea onChange={handleMessage} name="" id="" cols="30" rows="10" placeholder="Type your message"></textarea>
            <p>Your message:{message}</p>

            <select name="" id="" onChange={handlePayCard}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>This is your pay card: {cardSelection}</p>

            <input type="radio" value="pick up" checked={haveBy === "pick up"} onChange={handleHaveBy}/>
            <label htmlFor="">Pick up</label>
            <br />
            <input type="radio" value="delivery" checked={haveBy === "delivery"} onChange={handleHaveBy}/>
            <label htmlFor="">Delivery</label>
            <p>Your product will be: {haveBy}</p>
        </section>
    )
}

export default OnchangeI
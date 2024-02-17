function ButtonEvent () {
    
    //This is how we get the object that describes the event that occurres.
    //And we can check all of its properties and methods.


    const handleClick = (event) => event.target.textContent = "Ouch 🤕"

    return (
        //onDoubleClick handler exists
        <button onClick={(event) => handleClick(event)}>Click me 😁</button>
    )
}

export default ButtonEvent
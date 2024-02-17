function Buttons () {
    
    const clickedButton = () => console.log("You click me")

    //This is how we can call a function without arguments
    return (
        <button onClick={clickedButton}>Click me 😁</button>
    )
}

export default Buttons
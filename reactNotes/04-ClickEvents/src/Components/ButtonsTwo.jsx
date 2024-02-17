function ButtonsTwo () {
    
    let count = 0
    const clickedButton = (name) => {
        if (count < 3) {
            count++
            console.log(`${name} you clicked me ${count} time(s)`)
        } else {
            console.log(`${name} stop clicking me`)
        }
    }

    //This is how we can call a function with arguments
    return (
        <button onClick={() => clickedButton("Bernardo")}>Click me 😁</button>
    )
}

export default ButtonsTwo
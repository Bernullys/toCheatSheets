import { useState, useEffect } from "react"

function AdvExample () {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener("resize", handleSize) // the name of this event has to be resize
        console.log("event listener added")

        return () => {                                  // This cleanup code it can be done only when mounting (empty array)
            window.removeEventListener("resize", handleSize)
            console.log("event listener removed")
        }
    },[])

    // we can run more than one useEffect hook withing our component

    useEffect(() => {
        document.title = `Side code ${width} and ${height}`
    }, [width, height])


    
    function handleSize () {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <>
            <p> Width: {width} px</p>
            <p>Height: {height} px</p>
        </>
    )
}

export default AdvExample
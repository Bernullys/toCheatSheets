import React, { useState, useEffect } from "react"

function DigitalClock () {

    const [time, setTime] = useState(new Date())

    //when the component mount we will start an interval to move forward
    
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date())
        },1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])
    // we will put the array empty so the element will mount only once

    function formatTime () {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const merideum = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 0

        return `${zeroBefores(hours) + hours}:${zeroBefores(minutes) + minutes}:${zeroBefores(seconds) + seconds} ${merideum}`
    }

    function zeroBefores (n) {
        const zeroBefore = n > 9 ? "" : "0" // I can put here n so in the formatTime function return only the zeroBefores(each)
        return zeroBefore
    }


    return (
        <section className="clock-container">
            <span className="clock">{formatTime()}</span>
        </section>
    )
}

export default DigitalClock
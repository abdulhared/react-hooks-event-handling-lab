import React, { useState } from "react"

function EyesOnMe() {

    const [focus, blur] = useState("")

    function handleFocus(event) {
        console.log("Good!")
    }

    function handleBlur(event) {
        console.log("Hey! Eyes on me!")
    }

    return (
        <>
            <button
                onFocus={handleFocus}
                onBlur={handleBlur}

            >Eyes on me</button>
        </>
    )
}

export default EyesOnMe
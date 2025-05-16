import React, { useState } from "react";

function Keypad() {

    const [password, setPassword] = useState("");

    function handleChange(event) {
        setPassword(event.target.value);
        console.log("Entering password...")
    }

    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={handleChange}
            />
        </div>
    )
}

export default Keypad;
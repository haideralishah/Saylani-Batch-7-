import React, { useState } from "react";

function SelfCounter() {
    const [counter, setCounter] = useState(100);
    const [userName, setUserName] = useState("Haider");
    const [genNames, setGenNames] = useState(['Ali', 'Akram', 'Aslam', 'Umar', 'Haider']);

    const addCounter = () => {
        setCounter(counter + 1);
    }

    const updateUserName = () => {
        let ranNum = Math.floor(Math.random() * 5);
        let newName = genNames[ranNum];

        if (newName !== userName) setUserName(newName);
        else updateUserName();

    }

    return (
        <div>
            <b>{counter}</b>
            <button onClick={addCounter}>Add</button>

            <h2>{userName}</h2>
            <button onClick={updateUserName}>Update User Name</button>
        </div>
    )
}

export default SelfCounter;













import React, { useState, useEffect } from "react";
/*
Run once component did mount.
Run on every state change in component.
Run on any specific state change in component.
*/


function SelfCounter() {
    const [counter, setCounter] = useState(100);
    const [userName, setUserName] = useState("Haider");
    const [genNames, setGenNames] = useState(['Ali', 'Akram', 'Aslam', 'Umar', 'Haider']);
    const [h1Color, setH1Color] = useState("Red")

    //Run on every state change in component.
    useEffect(() => {
        console.log(`=======Current Counter: ${counter}========`);
    });

    //Run once component did mount.
    useEffect(() => {
        console.log(`=======Welcome ${userName}========`);
        document.title = `${counter} times clicked.`
    }, []);

    //Run on any specific state change in component.
    useEffect(() => {
        document.title = `${counter} times clicked.`;
        /*
        for Odd yellow
        for even red
        for divisable by 5 green
        */
    }, [counter]);


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
            <h1 style={{ backgroundColor: h1Color }}>Hello Use Effect</h1>

        </div>
    )
}

export default SelfCounter;













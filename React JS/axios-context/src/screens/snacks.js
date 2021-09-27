import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context'

function Snacks() {
    const { state, dispatch } = useContext(GlobalContext);
    const [newSnack, setNewSnack] = useState('');

    const updateSnack = () => {
        console.log('newSnack', newSnack);
        dispatch({ type: "UPDATE_SNACK", payload: newSnack });
    }

    return (
        <div>
            <h3>This is yummy {state?.snacks} and {state?.drink} for {state?.user?.userName}</h3>
            <input type="text" value={newSnack} onChange={(ev) => { setNewSnack(ev.target.value) }} />
            <button onClick={updateSnack}>Update Snack</button>
        </div>
    )
}

export default Snacks;
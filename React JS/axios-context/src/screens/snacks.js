import React, { useContext } from 'react';
import { GlobalContext } from '../context/context'

function Snacks() {
    const { state, dispatch } = useContext(GlobalContext);

    return (
        <h3>This is yummy {state.snacks} and {state.drink}</h3>
    )
}

export default Snacks;
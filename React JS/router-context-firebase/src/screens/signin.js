import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';
import { auth, signInWithEmailAndPassword } from '../configs/firebase';

function Snacks() {
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const signin = async () => {
        try {
            let { user } = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            dispatch({ type: "AUTH_USER", payload: user });
        } catch (err) {
            setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
    }

    return (
        <div>
            <h1>Hello Signin</h1>
            <label>Email<input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label>
            <label>Password<input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label>
            <button onClick={signin}>Signin</button>
            {errMsg ? <p>{errMsg}</p> : null}
        </div>
    )
}

export default Snacks;
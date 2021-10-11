import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/context';
import { auth, createUserWithEmailAndPassword, db, setDoc, doc } from '../configs/firebase';

function Snacks() {
    const { state, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userRole, setUserRole] = useState('trainer');
    const [errMsg, setErrMsg] = useState('');

    const register = async () => {
        try {
            console.log({ email, userRole })
            let { user } = await createUserWithEmailAndPassword(auth, email, password);
            let dataRef = doc(db, 'users', user.uid)
            await setDoc(dataRef, {
                email: user.email,
                uid: user.uid,
                userRole: userRole
            });

        } catch (err) {
            setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
    }

    return (
        <div>
            <h1>Hello Signup</h1>
            <label>Email<input type="email" value={email} onChange={(ev) => { setEmail(ev.target.value) }} /></label>
            <label>Password<input type="password" value={password} onChange={(ev) => { setPassword(ev.target.value) }} /></label>
            <select name="role" onChange={(e) => { setUserRole(e.target.value) }}>
                <option value='trainer'>Trainer</option>
                <option value='student'>Student</option>
            </select>

            <button onClick={register}>Register</button>
            {errMsg ? <p>{errMsg}</p> : null}
        </div>
    )
}

export default Snacks;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

let user = {
    email: "headeralishah@gmail.com",
    password: "123456"
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const history = useHistory();

    const login = () => {
        console.log('login clicked', email, password);
        if (user.email === email && user.password === password) {
            history.push('/');
        }
        else {
            setErr('Email or Password is incorrect.');
            setTimeout(() => {
                setErr('')
            }, 3000)
        }
    }
    return (
        <div>
            <input type="text" value={email} onChange={(event) => { setEmail(event.target.value) }} />
            <input type="password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
            <button onClick={login}>Login</button>
            {err ? <p style={{ color: 'red', backgroundColor: 'pink', width: '70%', margin:'0 auto' }}>{err}</p> : null}
        </div>
    )
}

export default Login;
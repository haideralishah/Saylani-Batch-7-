import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    let history = useHistory();
    return (
        <div>
            <h1>Hello Home Page</h1>
            <button onClick={() => {
                setTimeout(()=>{
                    history.push('/about');
                }, 3000)
            }}> Go To About</button>
        </div>
    )
}

export default Home;
import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import FreeAPI from '../screens/free-api';
import AnimalAPI from '../screens/animal-api-name';
import Snacks from '../screens/snacks';
import Signup from '../screens/signup';
import Signin from '../screens/signin';
import { auth, onAuthStateChanged } from './firebase';

export default function App() {
    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({ type: "AUTH_USER", payload: user });
            }
            else {
                console.log('user not found');
            }
        })
    }, []);

    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/animal-api">
                        <AnimalAPI />
                    </Route>
                    <Route path="/snacks">
                        <Snacks />
                    </Route>

                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/signin">
                        <Signin />
                    </Route>
                    <Route path="/">
                        <FreeAPI />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}
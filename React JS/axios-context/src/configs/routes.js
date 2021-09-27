import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import FreeAPI from '../screens/free-api';
import AnimalAPI from '../screens/animal-api-name';
import Snacks from '../screens/snacks';

export default function App() {
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
                    <Route path="/">
                        <FreeAPI />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}
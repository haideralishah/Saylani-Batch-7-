import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import FreeAPI from '../screens/free-api';

export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>

                    <Route path="/">
                        <FreeAPI />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
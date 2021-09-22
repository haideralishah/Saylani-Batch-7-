import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../screens/home';
import About from '../screens/about';
import Student from '../screens/student';
import Nav from '../components/navbar';
import StudentDetails from '../screens/student-details';
import Login from '../screens/login'

function Routes() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/student">
                    <Student />
                </Route>
                <Route path="/student-details/:rollNumber">
                    <StudentDetails />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
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
import AddStudent from '../screens/addstudent';
import AllStudent from '../screens/allstudent';
import { auth, onAuthStateChanged, db, doc, getDoc } from './firebase';
import SigninSide from '../screens/signinmaterial'

export default function App() {
    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserInfo(user.uid);
            }
            else {
                console.log('user not found');
            }
        })
    }, []);

    const fetchUserInfo = async (uid) => {
        let userRef = doc(db, 'users', uid);
        let userInfo = await getDoc(userRef);
        userInfo = userInfo.data();
        console.log(userInfo);
        dispatch({ type: "AUTH_USER", payload: userInfo });
    }

    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    
                    <Route path="/signinside">
                        <SigninSide />
                    </Route>
                    <Route path="/animal-api">
                        <AnimalAPI />
                    </Route>
                    <Route path="/snacks">
                        <Snacks />
                    </Route>

                    {
                        state.authUser ?
                            null : <>
                                <Route path="/signup">
                                    <Signup />
                                </Route>
                                <Route path="/signin">
                                    <Signin />
                                </Route>
                            </>
                    }

                    {
                        state.authUser?.userRole === 'trainer' ?
                            <>
                                <Route path="/add-student">
                                    <AddStudent />
                                </Route>
                                <Route path="/all-student">
                                    <AllStudent />
                                </Route>
                            </> : null
                    }



                    <Route path="/">
                        <FreeAPI />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}
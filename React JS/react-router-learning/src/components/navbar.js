import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/"> Home </Link><br />
            <Link to="/about"> About </Link><br />
            <Link to="/student"> Student </Link>

        </div>
    )
}

export default Nav;
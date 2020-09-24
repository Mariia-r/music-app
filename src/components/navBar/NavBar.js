import React from "react";
import {compose} from "redux";
import './NavBar.scss';
import {Link} from "react-router-dom";

const NavBar = (props) => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link to="/songs" className="nav-link">Songs</Link>
            </li>
            <li className="nav-item">
               <Link to="/donation" className="nav-link">Donation</Link>
           </li>
        </ul>
    );
}

export default compose(React.memo)(NavBar);
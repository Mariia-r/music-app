import React from "react";
import {compose} from "redux";
import './NavBar.scss';
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink to="/songs" className="nav-link" activeClassName="active-link">Songs</NavLink>
            </li>
            <li className="nav-item">
               <NavLink to="/donation" className="nav-link" activeClassName="active-link">Donation</NavLink>
           </li>
        </ul>
    );
}

export default compose(React.memo)(NavBar);
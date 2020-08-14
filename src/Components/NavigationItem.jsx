import React from 'react'

import {
    NavLink
} from "react-router-dom";

export const NavigationItem = ({png, title, to, exact}) => {
    return <NavLink style={{cursor: "pointer"}} className="flexed vertical actionItem navigationItem flex-item centered" to={to} exact={exact} activeClassName="active">
        <img src={png} alt="contacts image" width="70"/>
        <span className="centered-text navigationTitle">{title}</span>
    </NavLink>
}
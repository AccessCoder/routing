import {NavLink} from "react-router-dom";
import React from "react";

export default function NavBar(){
    return(
        <div>
            <NavLink to={"/"}> HomePage </NavLink>
            <NavLink to={"/button"}> ButtonPage </NavLink>
        </div>
    )
}
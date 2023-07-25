import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <nav className="row">
        <NavLink className="col" exact="true" to="/">Home</NavLink>
        <NavLink className="col offset-3"to="/AddHabit" >Add Habit</NavLink>
        <NavLink className="col offset-3"  to="/WeekData" >Tracking</NavLink>
        </nav>
    )
}

export default NavBar;
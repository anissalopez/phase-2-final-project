import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <nav className="nav">
        <NavLink exact="true" to="/">Home</NavLink>
        <NavLink to="/AddHabit" >Add Habit</NavLink>
        <NavLink to="/WeekData" >Tracking</NavLink>
        </nav>
    )
}

export default NavBar;
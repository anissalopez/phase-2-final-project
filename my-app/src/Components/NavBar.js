import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    function navStyle ({ isActive }){
        return (
            isActive ? {color: '#ffffff'} : { color: '#ffffff'}
        )
    };

    return(
        <nav className="nav">
        <NavLink exact to="/" style={(state) => navStyle(state)}>Home</NavLink>
        <NavLink to="/AddHabit" >Add Habit</NavLink>
        <NavLink to="/WeekData" >Tracking</NavLink>
        </nav>
    )
}

export default NavBar;
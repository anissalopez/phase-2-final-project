import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { NavDropdown, Nav, Navbar} from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {




  return (


        <Nav aria-label="Toggle navigation" >
          <NavDropdown >
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/AddHabit">Add Habit</NavDropdown.Item>
            <NavDropdown.Item href="/WeekData">Weekly Data</NavDropdown.Item>
            <NavDropdown.Item href="/MonthlyData">Monthly Data</NavDropdown.Item>
          </NavDropdown>
        </Nav>

    


  )
}
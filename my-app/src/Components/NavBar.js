import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Navigation() {

  return (
      <Container className="d-grid∆">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav placement="end" className=" justify-content-end">
              <Nav.Link  href="/AddHabit">Add Habit</Nav.Link>
              <Nav.Link href="/WeekData">Week Data</Nav.Link>
              <Nav.Link href="/MonthlyData">Month Data</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </Container>
  )
}
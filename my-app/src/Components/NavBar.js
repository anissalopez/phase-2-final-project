import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/esm/DropdownToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Habit App</Navbar.Brand>
          <Nav aria-label="Toggle navigation" >
            <NavDropdown >
              <NavDropdown.Item href="#/AddHabit">Add Habit</NavDropdown.Item>
              <NavDropdown.Item href="/WeekData">Weekly Data</NavDropdown.Item>
              <NavDropdown.Item href="/MonthlyData">Monthly Data</NavDropdown.Item>
            </NavDropdown>
          </Nav>
    
      </Container>
    </Navbar>
  );
}


export default Navigation;
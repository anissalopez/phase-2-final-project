import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="/">Habit Tracker</Navbar.Brand>
        

        <Navbar.Collapse placement="end" >
          <Nav>
            <NavDropdown title="More Options" >
              <NavDropdown.Item href="/WeekData">Weekly Data</NavDropdown.Item>
              <NavDropdown.Item href="/Calendar">Monthly Data</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="ml-auto" href="/AddHabit"><FontAwesomeIcon icon={faPlus}/></Nav.Link>
      

   
      </Container>
    
    </Navbar>
  );
}

export default NavBar;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCalendarDays, faPercent, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Navigation() {

  return (
      <Container fluid className="d-grid ">
        <Navbar fixed="top" bg="primary">
            <Navbar.Brand className="col text-white"href="/">
            <FontAwesomeIcon className="navIcon" icon={faHouse} style={{color: "#ffffff",}} />
              Home
            </Navbar.Brand>
            <Nav>
              <Nav.Link  className="navText col-md-auto text-white square border"href="/AddHabit">
              <FontAwesomeIcon className="navIcon" icon={faPlus} style={{color: "#ffffff",}} />
              Add Habit
              </Nav.Link>
              <Nav.Link className="navText col-md-auto text-white square border" href="/WeekData">
              <FontAwesomeIcon className="navIcon" icon={faPercent} style={{color: "#ffffff",}} />
                Weekly Data
              </Nav.Link>
              <Nav.Link  className="navText col-md-auto text-white sqare border"href="/MonthlyData">
              <FontAwesomeIcon className="navIcon" icon={faCalendarDays} style={{color: "#ffffff",}} />
              Monthly Data</Nav.Link>
              <Nav.Link  className="navText col-md-auto text-white sqare border"href="/Login">
              User</Nav.Link>
            </Nav>
        </Navbar>
        </Container>
  )
}
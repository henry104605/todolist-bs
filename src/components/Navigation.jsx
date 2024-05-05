import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TO-DO
        </Navbar.Brand>
        <Nav className="me-auto"></Nav>
        <Nav>
          <Nav.Link as={Link} to="/new">
            NEW
          </Nav.Link>
          <Nav.Link as={Link} to="/impressum">
            IMPRESSUM
          </Nav.Link>

        </Nav>

      </Container>

    </Navbar>
    
  );
}

import { Nav, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">TO-DO</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#home">NEW</Nav.Link>
            <Nav.Link href="#features">IMPRESSUM</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar/";
import Widget from "../Widget/Widget";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">HER SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Novedades</Nav.Link>
            <Nav.Link href="#pricing">Promociones</Nav.Link>
            <NavDropdown title="Ropa" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Vestidos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Blusas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pantalones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Registrate</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Widget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

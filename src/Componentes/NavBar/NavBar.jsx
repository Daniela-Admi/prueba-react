import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar/";
import Widget from "../Widget/Widget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link to="/">HER SHOP</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Novedades</Link>
            <Link to="/">Promociones</Link>
            <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
              <Link to="/">Aros</Link>
              <Link to="/">Collares</Link>
              <Link to="/">Tobilleras</Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/">Registrate</Link>
            <Link to="/>Cart">
              <Widget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

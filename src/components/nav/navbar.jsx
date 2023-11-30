import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/logo.png";
import "./navbar.css";
import { NavLink } from 'react-router-dom';

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <img className='navLogo' src={logo} alt='brand logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navStyle">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Our Product Offering</Nav.Link>
            <Nav.Link href="/contact">Get In Touch</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
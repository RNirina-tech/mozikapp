import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const { Brand, Collapse } = Navbar;

const NavBar = () => (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Brand as={Link} to="/">
            <img className="logo" src="https://uploads-ssl.webflow.com/5e21dacb31c76fac21d9a660/5fb397a581782a26d328a58a_Logo.png" />
        </Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/purchase">Purchase an album</Nav.Link>
      <Nav.Link as={Link} to="/credits">Credits</Nav.Link>
    </Nav>
  </Collapse>
</Navbar>
)

export default NavBar;


import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar className="project-navbar">
        <Link to="/">
        <img className="logoimage" src={logo} alt="logo"></img>
        </Link>
        <Container className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

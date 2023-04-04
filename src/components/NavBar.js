
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar className="project-navbar">
        {/* <p  className="logofont">SA</p> */}
        <img className="logoimage" src={logo} alt="logo"></img>
        <Container className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/experience">Experience</Link> */}
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

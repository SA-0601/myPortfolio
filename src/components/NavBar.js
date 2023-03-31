
import { Link } from "react-router-dom";
// import logo from "../images/apple-touch-icon.png";

function NavBar() {
  return (
    <div>
      <navbar className="navbar">
        <p  className="logo">SA</p>
        {/* <img src={logo} alt="logo" height={70}></img> */}
        <div className="nav">
        <Link to="/"><div className="menu-item">Home</div></Link>
        <Link to="/about"><div className="menu-item">About</div></Link>
        {/* <Link to="/experience">Experience</Link> */}
        <Link to="/projects"><div className="menu-item">Projects</div></Link>
        <Link to="/contact"><div className="menu-item">Contact</div></Link>
        </div>
      </navbar>
    </div>
  );
}

export default NavBar;

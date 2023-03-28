import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <navbar className="navbar">
        <h1 className="name">SA</h1>
        <div className="nav">

        
        <Link to="/"><div className="home">Home</div></Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </navbar>
    </div>
  );
}

export default NavBar;


import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div>
      <navbar className="navbar">
        <p  className="logo fst-cursive fs-10px" style={{fontFamily:"Delicious Handrawn",fontSize:50}}>SA</p>
        
        <div className="nav">
        <Link to="/"><div className="home">Home</div></Link>
        <Link to="/about"><div className="home">About</div></Link>
        {/* <Link to="/experience">Experience</Link> */}
        <Link to="/projects"><div className="home">Projects</div></Link>
        <Link to="/contact"><div className="home">Contact</div></Link>
        </div>
      </navbar>
    </div>
  );
}

export default NavBar;

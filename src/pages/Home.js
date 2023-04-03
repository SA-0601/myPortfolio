import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h2 className="heading-secondary">Home</h2>

      <div className="home-container">
        <div className="home-content">
          <h2>
            Shubha Agrawal
          </h2>
          <h4>Front End Developer</h4>
          <div className="home-buttons">
            <Link to="/about">
              <button>Know More</button>
            </Link>
            <button>
              <a href="../images/resume.pdf" download>
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="home-image">
          <img
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="homelaptop"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

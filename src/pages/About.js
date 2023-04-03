import htmlimage from "../images/html5.png";
import cssimage from "../images/css.png";
import jsimage from "../images/javascript.png";
import reactimage from "../images/react.png";
import mongodbimage from "../images/mongo.png";
import db2image from "../images/db2.png";
import sqlimage from "../images/sql.png";
import cobolimage from "../images/cobol.png";

function About() {
  return (
    <div>
      <h2 className="heading-secondary">About</h2>
      <div className="about-class">
        <div className="about-description">
          <p>
            She has a Master's degree in Computer Applications and has experience of 4 years working in Mainframes as a developer at DELL Technologies and Is a fresher
            with experience in Web development and OPEN to Opportunities.
          </p>
          <h1>
            Think. <span className="text-pink">Code.</span> Debug.
          </h1>
        </div>

        <div className="about-skills">
          <div className="skill-icons-container">
            <img className="skill-icon" src={htmlimage} alt="html"></img>
            <img className="skill-icon" src={cssimage} alt="css"></img>
            <img className="skill-icon" src={jsimage} alt="js"></img>
            
          </div>
          <div className="skill-icons-container">
            <img className="skill-icon" src={reactimage} alt="react"></img>
            <img className="skill-icon" src={mongodbimage} alt="mongodb"></img>
            <img className="skill-icon" src={db2image} alt="db2"></img>
            
          </div>
          <div className="skill-icons-container">
          <img className="skill-icon" src={sqlimage} alt="sql"></img>
            <img className="skill-icon" src={cobolimage} alt="cobol"></img>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

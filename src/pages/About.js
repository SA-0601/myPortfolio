import htmlimage from "../images/HTML5.svg";
import cssimage from "../images/css.svg";
import jsimage from "../images/javascript.svg";
import reactimage from "../images/React-icon.svg";
import mongodbimage from "../images/mongodbnew.svg";
import nodejs from "../images/Node.js_logo.svg";
import githubimage from "../images/github.svg";
import sqlimage from "../images/sql.svg";
import db2image from "../images/db2.svg";
import cobolimage from "../images/cobol-language.svg";
import Quote from "../components/Quote";


function About() {
  return (
    <div>
      <h2 className="heading-secondary"><Quote /></h2>
      <div className="about-class">
        <div className="about-description">
          <p>
            She has a Master's degree in Computer Applications and has experience of 4 years working in Mainframes as a developer at DELL Technologies and Is a fresher
            with experience in Web development and OPEN to Opportunities.
          </p>
          <h1>
          <span className="text-yellow">Think.</span> <span className="text-pink">Code.</span> <br></br><span className="text-green">Debug.</span>
          </h1>
          
        </div>

        <div className="about-skills">
          <div className="skill-icons-container">
            <img className="skill-icon1" src={htmlimage} alt="html"></img>
            <img className="skill-icon1" src={cssimage} alt="css"></img>
            <img className="skill-icon1" src={jsimage} alt="js"></img>
            
          </div>
          <div className="skill-icons-container">
          <img className="skill-icon2" src={db2image} alt="db2"></img>
            <img className="skill-icon2" src={mongodbimage} alt="mongodb"></img>
            <img className="skill-icon2" src={nodejs} alt="nodejs"></img>
            <img className="skill-icon3" src={githubimage} alt="github"></img>
            
          </div>
          <div className="skill-icons-container">
          <img className="skill-icon3" src={reactimage} alt="react"></img>
          
          <img className="skill-icon3" src={sqlimage} alt="sql"></img>
            <img className="skill-icon3" src={cobolimage} alt="cobol"></img>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

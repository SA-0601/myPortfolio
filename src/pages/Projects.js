import { projects } from "../data/data";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Projects() {
  return (
    <div>
      <h2 className="heading-secondary">PROJECTS</h2>
      <Container className="mt-5">
        <Row
          className="justify-content-center"
          xs={1}
          sm={1}
          md={3}
          lg={3}
          xl={3}
        >
          {projects.map((ele, i) => (
            <Col key={i} className="mb-3">
              <Card className="project-card">
                <Card.Img className="cardImage" variant="top" src={ele.image}/>
                <Card.Body>
                  <Card.Title>{ele.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button className="project-button"><a target="_blank" rel="noreferrer" href={ele.livelink}>Live Link</a></Button>
                  <Button className="project-button"><a target="_blank" rel="noreferrer" href={ele.githubURL}>GitHub</a></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

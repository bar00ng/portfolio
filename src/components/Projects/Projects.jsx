import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./projects.css";
import ProjectTimeline from "../ProjectTimeline/ProjectTimeline";

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="project__title">Projects</h1>
          </Col>
          <Col xs={12}>
            <ProjectTimeline/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

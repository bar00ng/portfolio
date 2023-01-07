import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./education.css";
import EducationTimeline from "../EducationTimeline/EducationTimeline";

export default function Education() {
  return (
    <div id="educations">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="education__title">education</h1>
          </Col>
          <Col xs={12}>
            <EducationTimeline />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

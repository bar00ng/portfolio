import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./languages.css";
import { languages } from "../../data";

export default function Languages() {
  return (
    <div id="languages">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="languages__title">Languages</h1>
          </Col>
          <Col xs={12}>
            {languages.map((item) => (
              <Row id={item.id} className="languages__progress">
                <Col xs={12} lg={3}>
                  <p className="languages__progressTitle">{item.lang}</p>
                  <p>{item.title}</p>
                </Col>

                <Col xs={12} lg={9}>
                  <ProgressBar
                    striped
                    animated
                    variant={
                      item.score >= 100
                        ? "success"
                        : item.score >= 50
                        ? "warning"
                        : item.score >= 0
                        ? "danger"
                        : ""
                    }
                    now={item.score}
                    label={`${item.score}%`}
                    className="languages__progressBar"
                  />
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

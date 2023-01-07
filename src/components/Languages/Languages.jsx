import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./languages.css";
import { languages } from "../../data";
import { Progress } from "flowbite-react";

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
              <Progress
                progress={item.score}
                label={item.lang}
                labelPosition="outside"
                labelProgress={true}
                size="lg"
                className="languages__progress"
                color={
                  item.score >= 100
                    ? "blue"
                    : item.score >= 50
                    ? "yellow"
                    : item.score >= 0
                    ? "red"
                    : ""
                }
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

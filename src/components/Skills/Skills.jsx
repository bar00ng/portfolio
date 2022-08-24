import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { skills } from "../../data";

import "./skills.css";

export default function Skills() {
  return (
    <div id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="skill__title">skills</h1>
          </Col>
          <Col xs={12}>
            <CardGroup>
              {skills.map((item) => (
                <Card id={item.id}>
                  <Card.Body>
                    <Card.Title className="skill__cardTitle">
                      <b>{item.title}</b>
                    </Card.Title>
                    <Card.Text>
                      <ul className="skill__cardLists">
                        {item.list.map((e) => (
                          <li className="skill__list">{e}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profileImage from "./../../img/daniel.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import "./about.css";

export default function About() {
  return (
    <div id="about">
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col md={12} lg={4}>
            <Image src={profileImage} fluid="true" className="about__picture" />
          </Col>
          <Col md={12} lg={8}>
            <div>
              <h1 className="about__title">ABOUT</h1>
              <p className="about__description">
                My name is <b>Daniel Yesayas Junior Wattimury</b>. People call
                me <b>Dan</b>. I was born in 3<sup className="z-10">rd</sup>{" "}
                October 2002. Currently, I live in Jakarta. I really like{" "}
                <b>programming</b>. I've learn <b>programming</b> since high
                school. I really looking forward to dive deeper into <b>IT</b>{" "}
                world.
              </p>
              <p className="about__description">
                Mostly in my spare time, I learn to play <b>guitar</b> and play
                <b> basketball.</b> I really interested in{" "}
                <b>Full Stack Programming,</b> I spend most of my spare time
                learning about it.{" "}
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="about__projects"
                >
                  Check all projects I've done!!
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

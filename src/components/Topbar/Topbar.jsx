import Container from "react-bootstrap/Container";
import { Link, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./topbar.css";

export default function Topbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#about" className="topbar__brand">
          DANIEL WATTIMURY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="topbar__links"
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="educations"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="topbar__links"
              >
                Education
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="topbar__links"
              >
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="languages"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="topbar__links"
              >
                Languages
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="topbar__links"
              >
                Projects
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

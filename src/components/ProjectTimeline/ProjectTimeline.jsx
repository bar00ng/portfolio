import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projects } from "../../data";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Carousel from "react-bootstrap/Carousel";
import "./projectTimeline.css";
import TabletIcon from "@mui/icons-material/Tablet";
import GitHubIcon from "@mui/icons-material/GitHub";

function CustomToggle({ data, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <>
      <p>{data.desc}</p>
      <div className="timeline__buttons">
        {data.link ? (
          <a href={data.link} className="timeline__button">
            <Button variant="dark">
              <GitHubIcon />
            </Button>
          </a>
        ) : null}
        <Button
          variant="primary"
          onClick={decoratedOnClick}
          className="timeline__button"
        >
          <CameraAltIcon />
        </Button>
      </div>
    </>
  );
}

export default function ProjectTimeline() {
  return (
    <VerticalTimeline layout="1-column-left">
      {projects.map((item) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#183153", color: "#fff" }}
          contentStyle={{ background: "#F8F9FA", color: "black" }}
          id={item.id}
          icon={
            item.tag === "Laravel" ? (
              <LaptopIcon />
            ) : item.tag === "Tablet" ? (
              <TabletIcon />
            ) : (
              <PhoneAndroidIcon />
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            <b>{item.name}</b>
          </h3>
          <Accordion>
            <CustomToggle eventKey={String(item.id)} data={item} />

            <Accordion.Collapse eventKey={String(item.id)}>
              <Carousel className="bg-slate-300" variant="dark">
                {item.img.map((e) => (
                  <Carousel.Item>
                    <img
                      className={`d-block m-auto ${
                        item.tag === "Laravel"
                          ? "w-100"
                          : item.tag === "Tablet"
                          ? "w-75"
                          : item.tag === "Mobile"
                          ? "h-50"
                          : ""
                      }`}
                      src={`/img/${e}`}
                      alt="First slide"
                      id={item.id.toString()}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Accordion.Collapse>
          </Accordion>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

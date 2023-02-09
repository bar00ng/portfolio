import { School } from "@mui/icons-material";
import StarIcon from "@mui/icons-material/Star";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../../data";

export default function EducationTimeline() {
  return (
    <VerticalTimeline lineColor="white">
      {education.map((item) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date={item.year}
          iconStyle={{ background: "#183153", color: "#fff" }}
          contentStyle={{ background: "#F8F9FA", color: "black" }}
          id={item.id}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            <b>{item.subTitle}</b>
          </h3>
          <h5 className="vertical-timeline-element-subtitle">{item.title}</h5>
          <p>{item.description ? item.description : null}</p>
        </VerticalTimelineElement>
      ))}

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}

import React from "react";
import { Icon, Container } from "semantic-ui-react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import activities from "../data/activities";

const SegmentExamplePlaceholder = () => (
  <Container fluid>
    <style>{`
      body {
        background-color: #EAEDED !important;
      }
    }
    `}</style>

    <VerticalTimeline layout={"one-column"}>
      {activities.map(activity => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={activity.date}
          iconStyle={{
            background: activity.background,
            color: "#fff",
            textAlign: "center"
          }}
          icon={
            <Icon
              name={activity.icon}
              fitted
              size="large"
              verticalAlign="bottom"
              style={{ padding: "25% 0em" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">{activity.name}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {activity.location}
          </h4>
          <p>{activity.description}</p>
        </VerticalTimelineElement>
      ))}

      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 – Today"
        iconStyle={{
          background: "c",
          color: "#fff",
          textAlign: "center"
          //   padding: "1em 0em"
        }}
        icon={
          <Icon
            name="graduation cap"
            fitted
            size="large"
            verticalAlign="bottom"
            style={{ padding: "25% 0em" }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Computer Science
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Massachusetts Amherst, MA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
*/}
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  </Container>
);

export default SegmentExamplePlaceholder;

import React from "react";
import { Button, Header, Icon, Container } from "semantic-ui-react";
import Timeline from "react-timeline-semantic-ui";

const SegmentExamplePlaceholder = () => (
  <Container fluid>
    <Timeline
      direction="left"
      icon="user"
      title="Title"
      time="Time"
      description="Description."
      color="red"
      tags={["tag1", "tag2"]}
      lineHeight={4}
      middle
    />
  </Container>
);

export default SegmentExamplePlaceholder;

import React from "react";
import {
  Button,
  Card,
  Image,
  Segment,
  List,
  Header,
  Divider
} from "semantic-ui-react";
import { Container } from "reactstrap";
import JourneyForm from "../forms/JourneyForm";
import SideNev from "../nevigation/SideNavigation";
import journeys from "../data/journeys";

const JourneyPage = () => (
  <Segment style={{ padding: "2em 0em" }} vertical>
    <Container>
      <Card.Group>
        {journeys.map(journey => (
          <JourneyForm journey={journey} />
        ))}
      </Card.Group>
    </Container>
  </Segment>
);

export default JourneyPage;

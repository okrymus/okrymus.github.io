import React from "react";
import {
  Button,
  Card,
  Image,
  Segment,
  List,
  Header,
  Divider,
  Container
} from "semantic-ui-react";
// import { Container } from "reactstrap";
import ProjectForm from "../forms/ProjectForm";
import SideNev from "../nevigation/SideNavigation";
import projects from "../data/projects";

const CardExampleGroups = () => (
  <Segment style={{ padding: "2em 0em" }} vertical>
    <Container fluid>
      <Card.Group>
        {projects.map(project => (
          <ProjectForm project={project} />
        ))}
      </Card.Group>
    </Container>
  </Segment>
);

export default CardExampleGroups;

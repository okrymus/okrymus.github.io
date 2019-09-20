import React from "react";
import { Card, Segment, Container } from "semantic-ui-react";
import ProjectForm from "../forms/ProjectForm";
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

import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Container } from "reactstrap";
import pythondjango from "../img/python-django.png";

const CardExampleGroups = () => (
  <Container fluid>
    <Card.Group>
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src={pythondjango} />
          <Card.Header>Discourz</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              More
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  </Container>
);

export default CardExampleGroups;

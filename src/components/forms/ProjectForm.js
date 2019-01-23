import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";
import { Header, Popup, Grid } from "semantic-ui-react";

import django from "../img/django.png";
import python from "../img/python.png";
import word from "../img/word.png";

class ProjectForm extends React.Component {
  state = {};
  render() {
    return (
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={
              (this.props.project.type === "django" && django) ||
              (this.props.project.type === "word" && word) ||
              (this.props.project.type === "python" && python)
            }
          />
          <Card.Header>{this.props.project.name}</Card.Header>
          <Card.Meta>{this.props.project.date}</Card.Meta>
          <Card.Description>
            {this.props.project.description} <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <div className="ui two buttons">
            <Button basic color="green">
              More
            </Button>
          </div> */}
          <Popup
            trigger={
              <div className="ui two buttons">
                <Button basic color="green">
                  More
                </Button>
              </div>
            }
            flowing
            hoverable
          >
            <Grid centered divided columns={3}>
              <Grid.Column textAlign="center">
                <Header as="h4">Basic Plan</Header>
                <p>
                  <b>2</b> projects, $10 a month
                </p>
                <Button>Choose</Button>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Header as="h4">Business Plan</Header>
                <p>
                  <b>5</b> projects, $20 a month
                </p>
                <Button>Choose</Button>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Header as="h4">Premium Plan</Header>
                <p>
                  <b>8</b> projects, $25 a month
                </p>
                <Button>Choose</Button>
              </Grid.Column>
            </Grid>
          </Popup>
        </Card.Content>
      </Card>
    );
  }
}

ProjectForm.propTypes = {
  project: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ProjectForm;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Image,
  Header,
  Popup,
  Label,
  Grid,
  Segment
} from "semantic-ui-react";

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
              (this.props.project.type[0] === "django" && django) ||
              (this.props.project.type[0] === "word" && word) ||
              (this.props.project.type[0] === "python" && python)
            }
          />
          <Card.Header>{this.props.project.name}</Card.Header>
          <Card.Meta>{this.props.project.date}</Card.Meta>
          <Card.Description>
            {this.props.project.shortDescription}
            <strong>best friends</strong>
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
                <Button
                  basic
                  color="green"
                  as={Link}
                  to={`projects/${this.props.project.name}`}
                >
                  More
                </Button>
              </div>
            }
            flowing
            hoverable
          >
            <Grid columns={2}>
              <Grid.Column>
                <Segment raised>
                  <Label as="a" color="red" ribbon>
                    Overview
                  </Label>
                  <span>Account Details</span>
                  SSSDSDFDDF
                  <Label as="a" color="blue" ribbon>
                    Community
                  </Label>
                  <span>User Reviews</span>
                  <Image src="/images/wireframe/paragraph.png" />
                </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment>
                  <Label as="a" color="orange" ribbon="right">
                    Specs
                  </Label>
                  <Image src="/images/wireframe/paragraph.png" />

                  <Label as="a" color="teal" ribbon="right">
                    Reviews
                  </Label>
                  <Image src="/images/wireframe/paragraph.png" />
                </Segment>
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

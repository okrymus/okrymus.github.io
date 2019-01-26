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
  Segment,
  Icon,
  Modal
} from "semantic-ui-react";

class ProjectForm extends React.Component {
  state = {};
  render() {
    return (
      <Card>
        <Image src="/images/avatar/large/matthew.png" />
        <Card.Content>
          <Card.Header>{this.props.journey.name}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.journey.date}</span>
          </Card.Meta>
          <Card.Description>{this.props.journey.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    );
  }
}

ProjectForm.propTypes = {
  journey: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ProjectForm;

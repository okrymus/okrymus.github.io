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
      <Button basic as={Link} to={`journey/${this.props.journey.name}`}>
        <Card>
          <Image
            src={require(`../img/journeys/${
              this.props.journey.folderName
            }/cover.jpg`)}
          />
          <Card.Content>
            <Card.Header>{this.props.journey.name}</Card.Header>
            <Card.Meta>
              <span className="date">{this.props.journey.date}</span>
            </Card.Meta>
            <Card.Description>
              {this.props.journey.shortDescription}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="plus" />
              More
            </a>
          </Card.Content>
        </Card>
      </Button>
    );
  }
}

ProjectForm.propTypes = {
  journey: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ProjectForm;

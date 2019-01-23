import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Image } from "semantic-ui-react";
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
    );
  }
}

ProjectForm.propTypes = {
  project: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ProjectForm;

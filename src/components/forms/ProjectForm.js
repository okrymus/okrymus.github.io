import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Card, Image, Label } from "semantic-ui-react";

import django from "../img/django.png";
import python from "../img/python.png";
import word from "../img/word.png";
import angular from "../img/angular.png";
import react from "../img/react.png";
import sklearn from "../img/sklearn.png";
import csharp from "../img/csharp.png";
import cplusplus from "../img/cplusplus.png";
import java from "../img/java.png";
import android from "../img/android.png";

const colors = ["blue", "teal", "yellow"];
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
              (this.props.project.type[0] === "python" && python) ||
              (this.props.project.type[0] === "react" && react) ||
              (this.props.project.type[0] === "sklearn" && sklearn) ||
              (this.props.project.type[0] === "c#" && csharp) ||
              (this.props.project.type[0] === "c++" && cplusplus) ||
              (this.props.project.type[0] === "Java" && java) ||
              (this.props.project.type[0] === "android" && android) ||
              (this.props.project.type[0] === "angular" && angular)
            }
          />
          <Card.Header>{this.props.project.name}</Card.Header>
          <Card.Meta>{this.props.project.date}</Card.Meta>
          <Card.Description>
            {this.props.project.shortDescription}
            <div>
              {this.props.project.type.map((kind, i) => (
                <Label color={colors[i % 3]} image>
                  {kind}
                </Label>
              ))}

              {/* <Label as="a" color="blue" image>
                Veronika
              </Label>
              <Label as="a" color="teal" image>
                Veronika
              </Label>
              <Label as="a" color="yellow" image>
                Helen
              </Label> */}
            </div>{" "}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {/* <div className="ui two buttons">
            <Button basic color="green">
              More
            </Button>
          </div> */}
          <div className="ui two buttons">
            <Button
              basic
              color="green"
              as={Link}
              to={`projects/${this.props.project.name}`}
            >
              More
            </Button>
            {this.props.project.sourceCode && (
              <Button
                basic
                color="red"
                target="_blank"
                href={this.props.project.sourceCode}
              >
                View Source
              </Button>
            )}
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

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Accordion,
  Icon,
  Segment,
  Header,
  Button,
  Divider,
  Image,
  List
} from "semantic-ui-react";
import { Container } from "reactstrap";
import projects from "../data/projects";

export default class SubProjectPage extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  project = projects.find(
    item => item.name === this.props.match.params.projectName
  );

  render() {
    const { activeIndex } = this.state;

    return (
      <Segment style={{ padding: "4em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            {this.project.name}
          </Header>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Description
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                {this.project.description
                  ? this.project.description
                  : this.project.shortDescription}
              </p>
            </Accordion.Content>

            {/* <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              What kinds of dogs are there?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                There are many breeds of dogs. Each breed varies in size and
                temperament. Owners often select a breed of dog that they find
                to be compatible with their own lifestyle and desires from a
                companion.
              </p>
            </Accordion.Content> */}
            {this.project.team && (
              <div>
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  Team members
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <List animated bulleted verticalAlign="middle">
                    {this.project.team.map(person => (
                      <List.Item>
                        <p>{person}</p>
                      </List.Item>
                    ))}
                  </List>
                </Accordion.Content>
              </div>
            )}
          </Accordion>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a>OVERVIEW</a>
          </Divider>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Panupong Leenawarat
          </Header>
          <div>
            <Button circular color="facebook" icon="facebook" />
            <Button circular color="twitter" icon="twitter" />
            <Button circular color="linkedin" icon="linkedin" />
            <Button circular color="google plus" icon="google plus" />
          </div>
          <List>
            <List.Item>
              <List.Icon name="world" />
              <List.Content>Origin Thailand</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>Amherst, MA</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:panupong_lee@me.com">panupong_lee@me.com</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="phone" />
              <List.Content>
                <a href="tel:+18572043916">8572043916</a>
              </List.Content>
            </List.Item>
          </List>
        </Container>
      </Segment>
    );
  }
}

SubProjectPage.propTypes = {
  match: PropTypes.string.isRequired
};

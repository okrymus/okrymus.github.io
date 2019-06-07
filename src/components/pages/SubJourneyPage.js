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
  List,
  Dimmer,
  Embed
} from "semantic-ui-react";
import { Container } from "reactstrap";
import journeys from "../data/journeys";

export default class SubProjectPage extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  handleOpen = () => this.setState({ active: true });
  handleClose = () => this.setState({ active: false });

  journey = journeys.find(
    item => item.name === this.props.match.params.journeyName
  );
  render() {
    const { activeIndex } = this.state;
    const { active } = this.state;

    return (
      <Segment style={{ padding: "4em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            {this.journey.name}
          </Header>
          <p style={{ fontSize: "1.33em" }}>{this.journey.description}</p>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{
              margin: "3em 0em",
              textTransform: "uppercase"
            }}
          >
            <a>OVERVIEW</a>
          </Divider>
          {this.journey.img &&
            this.journey.img.map(image => (
              <div>
                <Image
                  centered
                  size="big"
                  src={require(`../img/journeys/${
                    this.journey.folderName
                  }/${image}`)}
                />
                <Divider />
              </div>
            ))}

          {this.journey.vimeo &&
            this.journey.vimeo.map(videoID => (
              <div>
                <Embed
                  autoplay
                  id={videoID[0]}
                  placeholder={require(`../img/journeys/${
                    this.journey.folderName
                  }/${videoID[1]}`)}
                  source="vimeo"
                  hd
                />
                <Divider />
              </div>
            ))}

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

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import logo from "../img/logo.png";
import profilebg from "../img/profile-bg.png";
import {
  Grid,
  Image,
  Button,
  Header,
  Segment,
  Message,
  Icon
} from "semantic-ui-react";

const HomePage = () => (
  <Grid divided="vertically">
    <Grid.Row>
      <Grid.Column>
        <Image src={profilebg} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={2} />
      <Grid.Column width={12}>
        {/* <Header size="medium">
          After graduating from high school, I considered how I could be
          different from others.
        </Header> */}
        <Header as="h5" attached="top">
          Bio
        </Header>
        <Segment attached>
          After graduating from high school, I considered how I could be
          different from others.
        </Segment>
        <Header as="h5" attached>
          Cats
        </Header>
        <Segment attached>
          Cats are thought of as being related to dogs, but only humans think
          this.
        </Segment>
        <Header as="h5" attached>
          Lions
        </Header>
        <Segment attached>
          Humans don't think of lions as being like cats, but they are.
        </Segment>
        <Message icon>
          <Icon name="address card outline" />
          <Message.Content>
            <Message.Header>Contact</Message.Header>
            <div>
              Panupong Leenawarat
              <Button color="facebook">
                <Icon name="facebook" /> Facebook
              </Button>
              <Button color="linkedin">
                <Icon name="linkedin" /> LinkedIn
              </Button>
              <Button color="instagram">
                <Icon name="instagram" /> Instagram
              </Button>
              <Button color="github">
                <Icon name="github" /> Github
              </Button>
            </div>
          </Message.Content>
        </Message>
      </Grid.Column>
      <Grid.Column textAlign="center" width={2} />
    </Grid.Row>
  </Grid>
);

export default HomePage;

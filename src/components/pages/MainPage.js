import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment
} from "semantic-ui-react";
import myimg from "../img/my_img.jpg";
import myimg2 from "../img/K4A_0926.jpg";
import myimg3 from "../img/IMG_1414.jpg";
import myimg4 from "../img/IMG_1715.jpg";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="PERFECTLY IMPERFECTION"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "1m"
      }}
    />
    <Header
      as="h2"
      content="Sometimes errors can bring us to discover"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button
      primary
      basic
      inverted
      color="teal"
      size="huge"
      as={Link}
      to="/profile"
    >
      Discover Me!
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

const HomepageLayout = () => (
  <div>
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 350, padding: "1em 0em" }}
      vertical
    >
      <HomepageHeading />
    </Segment>
    <Segment style={{ padding: "2em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Hi, I'm Toto!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              On this site, you will discover who I am as a person aside from
              being a developer.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              What makes my life not just simple
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              When I was a teenager, personal computers had evolved and become
              affordable. I realized I could invent by using fewer resources.
              Sometimes, a computer was all I needed to create something new,
              like a new program. I became interested in computers and chose it
              as a top priority field of study.
            </p>
            <Image bordered centered size="huge" src={myimg3} />
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered rounded size="large" src={myimg} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {/* <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "One universe, eight planets, 195 countries, and I had the
              privelege of meeting you"
            </Header>

            <Image bordered rounded centered size="large" src={myimg2} />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Here is what people say about me
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              "Panupong Leenawarat has demonstrated his strong mathematical
              ability in both of my Calculus I and II classes. He is always in
              class and has shown an ability to work with others in my diverse
              student population." <b>Robert T. Carlson</b>{" "}
            </p>
            <p style={{ fontSize: "1.33em" }}>
              "From what I saw during his time in my class, Panupong is a
              vigorous, dynamic, and highly motivated person, who has an
              excellent knowledge of science, technology, Mathematics,
              computation skills, and computer science. He has been a good role
              model for his classmates and junior students."
              <b> Jirapong Soinoi</b>{" "}
            </p>
            <p style={{ fontSize: "1.33em" }}>
              "I have worked with Panupong in his many roles of technology
              support. He is extremely knowledgeable and handles every task
              efficiently and effectively. He is extremely service centric, and
              this shows in his support roles."
              <b> Worrawan Sae-Sim</b>{" "}
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "5em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          My first journey that I chose to share is what I am most passionate
          about.
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          It is unavoidable that money is important and a part of everyone’s
          life. Moreover, many people think and believe that being a rich person
          is the highest goal for their life to make their lives easier.
          Conversely, the truth is that the passion for money and richness
          causes them to become dependent and upon other things such as people
          and events. For instance, some people behave unethically killing or
          stealing for money. It is clear that wealth can control people.
          <b> However, for me, I prefer to be a memorable person.</b> It is true
          that a memorable person can be either bad or good. The way I chose to
          be is the middle between them because I realize that nobody is perfect
          and we all can make mistakes. Thomas Edison did not produce light
          bulbs in a single time. His success causes us to remember his name
          even he had met many failures before he found the way to build light
          bulbs. Somehow, the mistakes and failures inspire people to try again
          and avoid making the same mistakes. Before I found my passion for
          being a memorable person, I always said to myself that I still had
          tomorrow and other days to improve my standing among my friends and my
          family. However, now my thoughts have changed. Now I understand the
          very things I need to improve my circumstances, such as acceptance of
          others requires courage. Then I try to do like today is the last day
          of my life in everything from being a good student, a rewarding son
          and a likable friend. Therefore, I have to be brave to step out of my
          comfort zone to achieve my goal of being memorable. That is my
          passion.
        </p>
        <Button as={Link} to="/journey" size="large">
          Read More
        </Button>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a>MOST THANKFUL FOR</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          My Mother
        </Header>
        <p style={{ fontSize: "1.33em" }} />
        <Image bordered centered size="huge" src={myimg4} />
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Contact Me" />
              <div>
                <Button
                  href="https://www.facebook.com/panupong.leenawarat"
                  target="_blank"
                  circular
                  color="facebook"
                  icon="facebook"
                />
                <Button
                  href="https://www.linkedin.com/in/panupong-lee/"
                  target="_blank"
                  circular
                  color="linkedin"
                  icon="linkedin"
                />
                <Button
                  href="https://github.com/okrymus"
                  target="_blank"
                  circular
                  color="grey"
                  icon="github"
                />
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);

export default HomepageLayout;

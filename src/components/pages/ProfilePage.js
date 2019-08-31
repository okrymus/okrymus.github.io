import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Grid,
  Image,
  Button,
  Header,
  Segment,
  Flag,
  Icon,
  Divider,
  Rating,
  List
} from "semantic-ui-react";
import logo from "../img/logo.png";
import profilebg from "../img/profile-bg.png";
import myCartoon from "../img/my-cartoon2.png";
import resume from "../data/Panupong_Leenawarat_resume.pdf";
import umass from "../img/umass.png";
import bhcc from "../img/bhcc.png";

const HomePage = () => (
  <div>
    <Image src={profilebg} />

    <Segment style={{ padding: "2em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Tie
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Possess an Associate Degree in Computer Science. Pursuing
              bachelor’s degree in Computer Science with a concentration on
              Artificial Intelligent, Machine learning and web programming.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Brief my journey to US
              <Flag name="us" />
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              After graduating from high school, I considered how I could be
              different from others. If I were the same as my friends and
              followed the same path, my life would be just as simple and my
              passion, which is being a memorable person, would not be possible.
              I prefer to be different. The way I choose is to be a creator of
              new innovations. This requires me to be brave and step out of my
              comfort zone to achieve my goal. That was when my journey to the
              United States of America began. I started my journey by pursuing
              the computer science associate major at Bunker Hill Community
              College.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image rounded size="large" src={myCartoon} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <a href={resume} download="Panupong_Leenawarat_resume">
              <Button color="grey" size="huge">
                DOWNLOAD RESUME
              </Button>{" "}
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Icon name="graduation cap" />
              Education
            </Header>

            <p style={{ fontSize: "1.33em" }}>
              <Image src={umass} size="tiny" verticalAlign="middle" />
              <div>
                <strong>University of Massachusetts Amherst </strong> <br />
                <em>Bachelor’s degree in Computer Science</em>
              </div>
              <br />
              <Image src={bhcc} size="tiny" verticalAlign="middle" />

              <div>
                <strong> Bunker Hill Community College </strong>
                <br />
                <em>Associate Degree in Computer Science</em>
              </div>
            </p>
          </Grid.Column>

          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Icon name="pencil" />
              DAY-TO-DAY COMFORT
            </Header>
            <List animated verticalAlign="middle">
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="browser" size="large" />
                    HTML5 / CSS3
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="wpexplorer" size="large" />
                    Django / Bootstrap
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="paint brush" size="large" />
                    Bootstrap / Sketch
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="code" size="large" />
                    JAVA / C / C++
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="file code outline" size="large" />
                    Sklearn / CSV
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="python" size="large" />
                    Python / JavaScript{" "}
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="images outline" size="large" />
                    Photoshop / Lightroom
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="film" size="large" />
                    Final Cut Pro / Illustrator
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="git" size="large" />
                    Version Control ( GIT )
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="file word outline" size="large" />
                    Microsoft Office
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <Icon name="hand peace outline" />
              EXPERIENCE WITH
            </Header>
            <List animated verticalAlign="middle">
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="grav" size="large" />
                    TensorFlow / Sklearn
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="wrench" size="large" />
                    Hardware Installation
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="android" size="large" />
                    Android App
                  </List.Header>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="database" size="large" />
                    mySQL / MongoDB
                  </List.Header>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="camera" size="large" />
                    Photography / Film
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="react" size="large" />
                    Node.js / React.js{" "}
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="angular" size="large" />
                    Scala / Angular{" "}
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="music" size="large" />
                    Piano / flute
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="microchip" size="large" />
                    Arduino
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Header>
                    {" "}
                    <Icon name="sitemap" size="large" />
                    Networking: TCP, DNS servers, Mail Server, VPN, SSH
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h3" style={{ fontSize: "2em" }}>
                <Icon name="language" />
                Language
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <List animated verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Header as="a">
                        <Flag name="th" />
                        Thai{" "}
                        <Rating
                          defaultRating={5}
                          maxRating={5}
                          size="massive"
                          disabled
                        />
                      </List.Header>
                      <List.Description>Native</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as="a">
                        <Flag name="gb" />
                        English{" "}
                        <Rating
                          defaultRating={4}
                          maxRating={5}
                          size="massive"
                          disabled
                        />
                      </List.Header>
                      <List.Description>
                        Professional working proficiency
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Header as="a">
                        <Flag name="cn" />
                        Mandarin{" "}
                        <Rating
                          defaultRating={1}
                          maxRating={5}
                          size="massive"
                          disabled
                        />
                      </List.Header>{" "}
                      <List.Description>
                        Elementary proficiency
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </p>{" "}
            </Grid.Column>
            <Grid.Column>
              <Header as="h3" style={{ fontSize: "2em" }}>
                <Icon name="binoculars" />
                Interests
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Grid divided="vertically">
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <List animated verticalAlign="middle">
                        <List.Item>
                          <List.Content>
                            <List.Header as="a">
                              <Icon name="music" size="large" />
                              Piano{" "}
                            </List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header as="a">
                              <Icon name="food" size="large" />
                              Cooking{" "}
                            </List.Header>
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header as="a">
                              <Icon
                                name="money bill alternate outline"
                                size="large"
                              />
                              Trading{" "}
                            </List.Header>{" "}
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header as="a">
                              <Icon name="plane" size="large" />
                              Trips{" "}
                            </List.Header>{" "}
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column>
                      <List animated verticalAlign="middle">
                        <List.Item>
                          <List.Content>
                            <List.Header as="a">
                              <Icon name="photo" size="large" />
                              Photography{" "}
                            </List.Header>{" "}
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header as="a">
                              <Icon name="male" size="large" />
                              Modeling{" "}
                            </List.Header>{" "}
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header as="a">
                              <Icon name="snowflake" size="large" />
                              Ski/Snowboard{" "}
                            </List.Header>{" "}
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header as="a">
                              <Icon name="map" size="large" />
                              Hiking{" "}
                            </List.Header>{" "}
                          </List.Content>
                        </List.Item>
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </p>{" "}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Contact me</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Panupong Leenawarat
        </Header>
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
            color="github"
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
      </Container>
    </Segment>
  </div>
);

export default HomePage;

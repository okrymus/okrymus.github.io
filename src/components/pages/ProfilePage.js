import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import logo from "../img/logo.png";
import profilebg from "../img/profile-bg.png";
import { Grid, Image } from "semantic-ui-react";

const HomePage = () => (
  <Grid divided="vertically">
    <Grid.Row>
      <Grid.Column>
        <Image src={profilebg} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        <Image src="/images/wireframe/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/wireframe/paragraph.png" />
      </Grid.Column>
      <Grid.Column>
        <Image src="/images/wireframe/paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  //   <Container
  //     fluid
  //     style={{
  //       height: "100vh",
  //       color: "white"
  //       //   background: "linear-gradient(to right, #692022, #1b1819)"
  //     }}
  //   >
  //     <Row>
  //       <img
  //         src={profilebg}
  //         style={{
  //           width: "100%",
  //           height: "500px"
  //         }}
  //         alt="banner"
  //         className="img-responsive"
  //       />
  //     </Row>
  //     <Row
  //       className="align-items-center justify-content-center text-center"
  //       style={{ height: "100%" }}
  //     >
  //       <Col xs={12} sm={6}>
  //         <img className="img-fluid" alt="Adventurers League Logo" src={logo} />
  //       </Col>
  //       <Col
  //         xs={12}
  //         sm={6}
  //         style={{
  //           fontFamily: "'Open Sans', sans-serif"
  //         }}
  //       >
  //         <h1
  //           style={{
  //             boxShadow:
  //               "6px 0 0 rgba(20,12,10, .7), -6px 0 0 rgba(20,12,10, .7)",
  //             background: "rgba(20,12,10, .7)",
  //             lineHeight: "3rem"
  //           }}
  //         >
  //           Sup!
  //         </h1>
  //         <br />
  //         <div className="text-center">
  //           <Link
  //             to="/dashboard"
  //             className="btn btn-primary btn-lg"
  //             style={{
  //               backgroundColor: "#9c0b0e",
  //               border: "none"
  //             }}
  //           >
  //             JOIN THE PARTY!
  //           </Link>
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
);

export default HomePage;

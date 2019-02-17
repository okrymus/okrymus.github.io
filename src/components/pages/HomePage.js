import React from "react";
import { Link } from "react-router-dom";
import { Embed } from "semantic-ui-react";
import { Container, Row, Col } from "reactstrap";
import logo from "../img/logo.png";
import mexicoCover from "../img/videocover/Mexico.png";

const HomePage = () => (
  <Container
    fluid
    style={{
      height: "105vh",
      color: "white"
      // background: "linear-gradient(to right, #692022, #1b1819)"
    }}
  >
    <Row
      className="align-items-center justify-content-center text-center"
      style={{ height: "100%" }}
    >
      <Col xs={12} sm={6}>
        <img className="img-fluid" alt="Adventurers League Logo" src={logo} />
      </Col>
      <Col
        xs={12}
        sm={6}
        style={{
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
        <h1
          style={{
            boxShadow:
              "6px 0 0 rgba(20,12,10, .7), -6px 0 0 rgba(20,12,10, .7)",
            background: "rgba(20,12,10, .7)",
            lineHeight: "3rem"
          }}
        >
          Welcome to OKRYMUS
        </h1>

        <br />
        <div className="text-center">
          <Link
            to="/main"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#9c0b0e",
              border: "none"
            }}
          >
            Click here to enter!
          </Link>
        </div>
        <br />

        <Embed
          autoplay
          id="317699592"
          placeholder={mexicoCover}
          source="vimeo"
          hd
        />
      </Col>
    </Row>
  </Container>
);

export default HomePage;

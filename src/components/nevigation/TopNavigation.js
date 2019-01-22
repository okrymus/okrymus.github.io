import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import logo from "../img/Blog-logo.png";

export default class TopNavigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item as={Link} to="/">
          <img src={logo} />
        </Menu.Item>

        <Menu.Item
          name="Home"
          as={Link}
          to="/main"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="Projects"
          as={Link}
          to="/projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name="Timeline"
          active={activeItem === "Timeline"}
          onClick={this.handleItemClick}
        >
          Timeline
        </Menu.Item>
        <Menu.Item
          name="Gallary"
          active={activeItem === "Gallary"}
          onClick={this.handleItemClick}
        >
          Gallary
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="Profile"
            as={Link}
            to="/profile"
            active={activeItem === "Profile"}
            onClick={this.handleItemClick}
          >
            Profile
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

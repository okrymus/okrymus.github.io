import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Menu } from "semantic-ui-react";
import logo from "../img/icon-logo.png";

// export default class TopNavigation extends Component {
//   state = {};

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
//     const { activeItem } = this.state;

//     return (
//       <Menu stackable>
//         <Menu.Item as={Link} to="/">
//           <img src={logo} />
//         </Menu.Item>

//         <Menu.Item
//           name="Home"
//           as={Link}
//           to="/main"
//           active={activeItem === "Home"}
//           onClick={this.handleItemClick}
//         >
//           Home
//         </Menu.Item>

//         <Menu.Item
//           name="Projects"
//           as={Link}
//           to="/projects"
//           active={activeItem === "Projects"}
//           onClick={this.handleItemClick}
//         >
//           Projects
//         </Menu.Item>

//         <Menu.Item
//           name="Timeline"
//           as={Link}
//           to="/timeline"
//           active={activeItem === "Timeline"}
//           onClick={this.handleItemClick}
//         >
//           Timeline
//         </Menu.Item>
//         <Menu.Item
//           name="Gallary"
//           active={activeItem === "Gallary"}
//           onClick={this.handleItemClick}
//         >
//           Gallary
//         </Menu.Item>
//         <Menu.Item
//           name="Personal"
//           as={Link}
//           to="/Personal"
//           active={activeItem === "Personal"}
//           onClick={this.handleItemClick}
//         >
//           Personal
//         </Menu.Item>
//         <Menu.Menu position="right">
//           <Menu.Item
//             name="Profile"
//             as={Link}
//             to="/profile"
//             active={activeItem === "Profile"}
//             onClick={this.handleItemClick}
//           >
//             Profile
//           </Menu.Item>
//         </Menu.Menu>
//       </Menu>
//     );
//   }
// }

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { Link } from "react-router-dom";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { activeItem } = this.state;
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            vertical
            style={{ minHeight: 60, padding: "1em 0em" }}
          >
            <Menu inverted fixed="top" size="small">
              <Menu.Item
                as={Link}
                to="/"
                header
                active={activeItem === "/"}
                onClick={this.handleItemClick}
              >
                <Image
                  size="mini"
                  src={logo}
                  style={{ marginRight: "1.5em" }}
                />
                Okrymus
              </Menu.Item>
              <Menu.Item
                name="Main"
                as={Link}
                to="/main"
                active={activeItem === "Main"}
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
                as={Link}
                to="/timeline"
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
              <Menu.Item
                name="Personal"
                as={Link}
                to="/Personal"
                active={activeItem === "Personal"}
                onClick={this.handleItemClick}
              >
                Personal
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
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to="/" header onClick={this.handleSidebarHide}>
            <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
            Okrymus
          </Menu.Item>
          <Menu.Item
            name="Main"
            as={Link}
            to="/main"
            onClick={this.handleSidebarHide}
          >
            Home
          </Menu.Item>
          <Menu.Item
            name="Project"
            as={Link}
            to="/projects"
            onClick={this.handleSidebarHide}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            name="Timeline"
            as={Link}
            to="/timeline"
            onClick={this.handleSidebarHide}
          >
            Timeline
          </Menu.Item>
          <Menu.Item
            name="Profile"
            as={Link}
            to="/profile"
            onClick={this.handleSidebarHide}
          >
            Profile
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 60, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item
                  onClick={
                    !sidebarOpened ? this.handleToggle : this.handleSidebarHide
                  }
                  onSwipeLeft={this.handleSidebarHide}
                >
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as={Link}
                    to="/profile"
                    inverted
                    style={{ marginLeft: "0.5em" }}
                  >
                    Profile
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const TopNavigation = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

TopNavigation.propTypes = {
  children: PropTypes.node
};

export default TopNavigation;

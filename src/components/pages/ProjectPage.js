import React from "react";
import {
  Button,
  Card,
  Image,
  Segment,
  List,
  Header,
  Divider,
  Container
} from "semantic-ui-react";
// import { Container } from "reactstrap";
import ProjectForm from "../forms/ProjectForm";
import SideNev from "../nevigation/SideNavigation";
import projects from "../data/projects";

const CardExampleGroups = () => (
  //   <Container style={{ marginTop: "1em" }}>
  //     <Card.Group>
  //       {projects.map(project => (
  //         <ProjectForm project={project} />
  //       ))}

  //       {/* <Card>
  //         <Card.Content>
  //           <Image floated="right" size="mini" src={pythondjango} />
  //           <Card.Header>Discourz</Card.Header>
  //           <Card.Meta>Friends of Elliot</Card.Meta>
  //           <Card.Description>
  //             Steve wants to add you to the group <strong>best friends</strong>
  //           </Card.Description>
  //         </Card.Content>
  //         <Card.Content extra>
  //           <div className="ui two buttons">
  //             <Button basic color="green">
  //               More
  //             </Button>
  //           </div>
  //         </Card.Content>
  //       </Card>
  //       <Card>
  //         <Card.Content>
  //           <Image floated="right" size="mini" src={pythondjango} />
  //           <Card.Header>Tumor</Card.Header>
  //           <Card.Meta>Friends of Elliot</Card.Meta>
  //           <Card.Description>
  //             Steve wants to add you to the group <strong>best friends</strong>
  //           </Card.Description>
  //         </Card.Content>
  //         <Card.Content extra>
  //           <div className="ui two buttons">
  //             <Button basic color="green">
  //               More
  //             </Button>
  //           </div>
  //         </Card.Content>
  //       </Card>
  //       <Card>
  //         <Card.Content>
  //           <Image floated="right" size="mini" src={pythondjango} />
  //           <Card.Header>Discourz</Card.Header>
  //           <Card.Meta>Friends of Elliot</Card.Meta>
  //           <Card.Description>
  //             Steve wants to add you to the group <strong>best friends</strong>
  //           </Card.Description>
  //         </Card.Content>
  //         <Card.Content extra>
  //           <div className="ui two buttons">
  //             <Button basic color="green">
  //               More
  //             </Button>
  //           </div>
  //         </Card.Content>
  //       </Card> */}
  //     </Card.Group>
  //   </Container>
  <Segment style={{ padding: "2em 0em" }} vertical>
    <Container fluid>
      <Card.Group>
        {projects.map(project => (
          <ProjectForm project={project} />
        ))}
      </Card.Group>
    </Container>
  </Segment>
);

export default CardExampleGroups;

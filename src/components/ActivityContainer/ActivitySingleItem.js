import React from "react";
// import { Link } from 'react-router-dom';
import utils from "../../helpers/utils";
import { Container, Col, Jumbotron, Button } from "reactstrap";

const ActivitySingleItem = ({ activity }) => (
  <Container style={{ marginTop: 100 }}>
    <Col>
      <Jumbotron>
        <h1 className="display-3">{activity.name}</h1>
        <p className="lead"> {activity.description}</p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typgraphy and spacing to space content out
          within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </Col>
  </Container>
);

export default ActivitySingleItem;

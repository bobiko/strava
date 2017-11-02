import React from "react";
// import { Link } from 'react-router-dom';
import utils from "../../helpers/utils";
import { Container, Col } from "reactstrap";

const ActivitySingleItem = ({item}) => (
    <Container style={{ marginTop: 100 }}>
        <Col>
          <p>{item.name}</p>
        </Col>
      </Container>
);

export default ActivitySingleItem;
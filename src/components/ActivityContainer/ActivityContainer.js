import React from "react";
import Loader from "../LoaderContainer";
import { Table, Container, Col, Row } from "reactstrap";

const ActivityContainer = ({ match }) => (
  <Container style={{ marginTop: 100 }}>
    <Col>
      <h3>ID: {match.params.id}</h3>
    </Col>
  </Container>
);

export default ActivityContainer;

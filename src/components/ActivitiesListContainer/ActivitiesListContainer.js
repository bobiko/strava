import React, { Component } from "react";
import Loader from "../LoaderContainer/LoaderContainer";
import { Table, Container, Col, Row } from "reactstrap";
import Moment from "react-moment";
import moment from "moment";

import ActivitiesListItem from "./ActivitiesListItem";

const ActivitiesListContainer = ({ result, props }) => (
  <Container style={{ marginTop: 100 }}>
    <Col>
      <Table>{result.map(item => <ActivitiesListItem item={item} />)}</Table>
    </Col>
  </Container>
);

export default ActivitiesListContainer;

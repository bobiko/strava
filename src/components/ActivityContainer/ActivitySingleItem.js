import React from "react";
// import { Link } from 'react-router-dom';
import utils from "../../helpers/utils";
import { Container, Col, Jumbotron, Button, Row } from "reactstrap";

import Photo from '../Photo/Photo'

const ActivitySingleItem = ({ activity }) => (
  <Container style={{ marginTop: 100 }}>
    <Row>
      <Col>
        <Jumbotron>
          <h1 className="display-3">{activity.name}</h1>
          <p className="lead"> {activity.description}</p>
          <hr className="my-2" />
          <p>
            {activity.description} / {utils.covertDatetime(activity.start_date)}
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
    <Row>
      <Col md={2}>
        <p className="center">
          {utils.convertDistance(activity.distance)} km
        </p>
        <small>Distance</small>
      </Col>
      <Col md={2}>
        <p className="center">
          {utils.convertTime(activity.moving_time)}  
        </p>
        <small>Moving Time</small>
      </Col>
      <Col md={2}>
        <p className="center">
          {utils.convertSpeed(activity.average_speed)}  km/h          
        </p>
        <small>Average Speed</small>
      </Col>
      <Col md={2}>
        <p className="center">
          {(activity.elev_high - activity.elev_low).toFixed(0)} m
        </p>
        <small>Elevation</small>
      </Col>
      <Col md={2}>
        <p className="center">
          {activity.calories} kcal
        </p>
        <small>Calories</small>
      </Col>
      <Col md={2}></Col>
    </Row>
    <Row>
      <Photo photo={activity.photos.primary} />
    </Row>
  </Container>
);

export default ActivitySingleItem;

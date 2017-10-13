import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Col, Row
} from 'reactstrap';

const Athlete = ({ result }) => (
    <Container style={{ marginTop: 100 + 'px' }}>
        <Row>
            <Col lg={6} offset={3}>
                <Card>
                    <CardImg top src={result.profile} alt="Card image cap" width={180} style={{ width: 180 + 'px' }} />
                    <CardBody>
                        <CardTitle>{result.firstname} {result.lastname}</CardTitle>
                        <CardSubtitle>{result.username}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);

Athlete.propTypes = {
    result: PropTypes.object.isRequired
}

export default Athlete;
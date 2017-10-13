import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Col, Row
} from 'reactstrap';

const Athlete = ({ result }) => (
    <Container style={{ marginTop: 100 + 'px' }}>
        <Row>
            <Col lg={6} offset={3} className="text-center offset-md-3">
                <Card>
                    <div className="text-center">
                    <CardImg top src={result.profile_medium} alt="Card image cap" width={180} style={{ width: 180 + 'px', borderRadius: 50+'%', padding: 10 }} className="text-center" />
                    </div>
                    <CardBody>
                        <CardTitle>{result.firstname} {result.lastname}</CardTitle>
                        <CardSubtitle>{result.username}</CardSubtitle>
                        <CardText>
                            { result.state } / { result.country }
                        </CardText>
                        
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
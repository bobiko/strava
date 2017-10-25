import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Container, Col, Row } from "reactstrap";

export const tableItem = (pos, item) => (
  <tr>
    <th scope="row">{pos}</th>
    <td>{item.max_heartrate}</td>
  </tr>
);

const Activites = ({ result }) => (
  <Container style={{ marginTop: 100 + "px" }}>
    <Col lg={12}>
      <Table>
      {
        result.map(item => (
            <tbody>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.distance}</td>
                </tr>
            </tbody>
         ))
      }
        
      </Table>
    </Col>
  </Container>
);

//todo: powinien być komponent 

export default Activites;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Container, Col, Row } from "reactstrap";
import Moment from "react-moment";
import moment from 'moment';
import { convert } from '../../helpers/utils';



const Activites = ({ result }) => (
  <Container style={{ marginTop: 100 + "px" }}>
    <Col lg={12}>
      <Table>
        {
          result.map(item => (
            <tbody key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td>{moment()
                  .startOf('day')
                  .seconds(item.moving_time)
                  .format('H:mm:ss')
                }</td>
                <td>{(item.distance * 0.001).toFixed(2)}</td>
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

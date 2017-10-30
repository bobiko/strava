import React from "react";
import Loader from "../LoaderContainer";
import { Table, Container, Col, Row } from "reactstrap";

// import { strava } from "root/config";
// const api = require('root/helpers/api');

// class ActivityContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true,
//       acitivity: [{}]
//     };
//   }

//   getActivityData(url) {
//     api.fetchStrava(url)
//     .then(response => this.setActivityData(response));
//   }

//   setActivityData(result) {
//     console.table(result);
//     this.setState = ({
//       loading: false,
//       result: result
//     });
//   }

//   componentDidMount() {
//     let activityId = this.props.match.params.id;
//     let url = `${strava.path.base}${strava.userId}${strava.path
//       .activities}/${activityId}/?${strava.path.token}${strava.token}`;

//     this.getActivityData(url);

//   }

//   render() {
//     const { loading, result } = this.state;

//     return loading ? <Loader /> : <p>OK</p>;
//   }
// }

const ActivityContainer = ({ item }) => (
  <Container style={{ marginTop: 100 }}>
    <Col>
      <p>{item}</p>
    </Col>
  </Container>
);

export default ActivityContainer;

import React from "react";
import Loader from "../LoaderContainer";
import { Table, Container, Col, Row } from "reactstrap";

import ActivitySingleItem from './ActivitySingleItem'

// import { strava } from "root/config";
// const api = require('root/helpers/api');

class ActivityContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.state = {
      item: props.location.state.item,
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }

  render() {
     const { loading, item } = this.state;
           
    return loading ? <Loader /> :<ActivitySingleItem item={item} />; 
  }
}

export default ActivityContainer;

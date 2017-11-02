import React from "react";
import Loader from "../LoaderContainer/LoaderContainer";
import { Table, Container, Col, Row } from "reactstrap";

import ActivitySingleItem from "./ActivitySingleItem";
import { strava } from "../../config/";

// import { strava } from "root/config";
// const api = require('root/helpers/api');

const api = require("../../helpers/api");

class ActivityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.location.state.item,
      loading: true
    };
  }

  getAthleteData(url) {
    api.fetchStrava(url).then(response => this.setAtheteData(response));
  }

  setAtheteData(result) {
    console.log(result);
    this.setState({
      loading: false,
      result: result
    });
  }
  // todo: sprawdzic activity
  componentDidMount() {
     let url = `${strava.path.base}${strava.activities}/${this.state.item.id}?${strava.path.token}${strava.token}`;
     this.getAthleteData(url);

    this.setState({
      loading: false
    });
  }

  render() {
    const { loading, item } = this.state;

    console.log(item);

    return loading ? <Loader /> : <ActivitySingleItem activity={item} />;
  }
}

export default ActivityContainer;

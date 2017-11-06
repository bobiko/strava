import React from "react";
import Loader from "../LoaderContainer/LoaderContainer";
import { Table, Container, Col, Row } from "reactstrap";

import ActivitySingleItem from "./ActivitySingleItem";
import { strava } from "../../config/";

const api = require("../../helpers/api");

class ActivityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.location.state.item,
      loading: true,
      activity: []
    };
  }

  getActivityData(url) {
    api.fetchStrava(url).then(response => this.setActivityData(response));
  }

  setActivityData(activity) {
    console.log(activity);

    this.setState({
      loading: false,
      activity: activity
    });
  }

  componentDidMount() {
    let url = `${strava.path.base}${strava.path
      .activities}/${this.props.location.state.item.id}?${strava.path.token}${strava.token}`;
    this.getActivityData(url);   
  }

  render() {
    const { loading, activity } = this.state;

    return loading ? <Loader /> : <ActivitySingleItem activity={activity} />;
  }
}

export default ActivityContainer;

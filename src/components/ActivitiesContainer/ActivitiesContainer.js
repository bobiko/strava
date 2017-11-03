import React from "react";
import Loader from "../LoaderContainer/LoaderContainer";
import { Jumbotron, Button } from "reactstrap";

import { strava } from "../../config";
import ActivitiesListContainer from "../ActivitiesListContainer/ActivitiesListContainer"

const api = require("../../helpers/api");

class ActivitiesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      allActivities: [{}]
    };
  }

  getData(url) {
    api.fetchStrava(url).then(response => this.setData(response));
  }

  setData(result) {
    console.table(result);
    this.setState({
      loading: false,
      result: result
    });
  }

  componentDidMount() {
    let url = `${strava.path.base}${strava.path.athlete}/${strava.userId}${strava.path
      .activities}?${strava.path.token}${strava.token}`;
    this.getData(url);
  }

  render() {
    const { loading, result } = this.state;

    return loading ? <Loader /> : <ActivitiesListContainer result={result} />;
  }
}

export default ActivitiesContainer;
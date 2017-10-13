import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { strava } from '../../config/';

import Athlete from '../Athlete/';

const api = require('../../helpers/api'); //const api = require('../../utils/Api');

class AthleteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: ''
    };
  }

  getAthleteData(url) {
    api
      .fetchStrava(url)
      .then(response => this.setAtheteData(response));
  }

  setAtheteData(result) {
    console.log(result)
    this.setState({
      loading: false,
      result: result
    })
  }

  componentDidMount() {
    let url = `${strava.path.base}${strava.userId}?${strava.path.token}${strava.token}`;
    this.getAthleteData(url);
  }

  render() {
    const {
      loading,
      result
    } = this.state;

    return loading
      ? <p> loading </p>
      : <Athlete result={result} />
  }
}

export default AthleteContainer;
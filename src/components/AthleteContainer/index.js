import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { strava } from '../../config/';

const api = require('../../helpers/api');

class AthleteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      profile: '',
      firstname: '',
      lastname: '',
      state: '',
      country: ''
    };
  }

  getAthleteData(url) {
    console.log(api, url);
    // fetchStrava(url).then(response => this.setAtheteData(response));
    // api
    //   .fetchFromStrava(url)
    //   .then(response => this.setAtheteData(response));
  }

  setAtheteData(result) {
    console.log(result)
    this.setState({
      loading: false,
      profile: result.profile,
      firstname: result.firstname,
      lastname: result.lastname,
      state: result.state,
      country: result.country
    })
  }

  componentDidMount() {
    let url = `${strava.path.base}${strava.userId}?${strava.path.token}${strava.token}`;
    this.getAthleteData(url);
  }

  render(){
    const {
      loading,
      profile,
      firstname,
      lastname,
      state,
      country
    } = this.state;

    return loading 
    ? <p> loading </p>
    : <p> jest ok </p>
  }
}

export default AthleteContainer;
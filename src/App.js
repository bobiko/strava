import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

import Header from './components/Header/'
import AthleteContainer from './components/AthleteContainer/'
import StatsContainer from './components/StatsContainer/'
import ActivitiesContainer from './components/ActivitiesContainer/'
import ActivityContainer from './components/ActivityContainer/ActivityContainer'
import ErrorContainer from './components/ErrorContainer/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/profile" component={AthleteContainer} />
          <Route exact path="/stats" component={StatsContainer} />
          <Route exact path="/activities" component={ActivitiesContainer} />
          <Route exact path="/activity/:id" render={({ ...props }) => <ActivityContainer pass_to_page_content='hi' {...props} /> } /> 
          <Route component={ErrorContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;

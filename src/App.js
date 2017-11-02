import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

import Header from "./components/Header/Header";
import AthleteContainer from "./components/AthleteContainer/AthleteContainer";
import StatsContainer from "./components/StatsContainer/StatsContainer";
import ActivitiesContainer from "./components/ActivitiesContainer/ActivitiesContainer";
import ActivityContainer from "./components/ActivityContainer/ActivityContainer";
import ErrorContainer from "./components/ErrorContainer/ErrorContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/athlete" component={AthleteContainer} />
          <Route exact path="/stats" component={StatsContainer} />
          <Route exact path="/activities" component={ActivitiesContainer} />
          <Route
            exact
            path="/activity/:id"
            render={({ ...props }) => <ActivityContainer {...props} />}
          />
          <Route component={ErrorContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;

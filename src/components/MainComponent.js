import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Header from "./HeaderComponent";
import Feed from "./FeedComponent";
import PetProfile from "./PetProfileComponent";
import Shelters from "./SheltersComponent";
import Lostpet from "./LostpetsComponent";
import uuid from "react-uuid";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueId: "",
    };
    this.generateId = this.generateId.bind(this);
  }

  generateId(event) {
    event.preventDefault();
    this.setState({
      uniqueId: uuid(),
    });
    event.preventDefault();
    console.log(this.state.uniqueId);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/Feed">
            <Feed />
          </Route>
          <Route
            path="/PetProfile"
            render={() => <PetProfile uniqueId={this.state.uniqueId} />}
          />
          <Route path="/Shelters">
            <Shelters />
          </Route>
          <Route path="/Lostpets">
            <Lostpet />
          </Route>
          <Redirect to="/Feed" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);

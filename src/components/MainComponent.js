import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Header from "./HeaderComponent";
import Feed from "./FeedComponent";
import PetProfile from "./PetProfileComponent";
import Shelters from "./SheltersComponent";
import Lostpet from "./LostpetsComponent";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/Feed">
            <Feed/>
          </Route>
          <Route path="/PetProfile">
            <PetProfile/>
          </Route>
          <Route path="/Shelters">
          <Shelters/>
          </Route>
          <Route path="/Lostpets">
          <Lostpet/>
          </Route>
          <Redirect to="/Feed" />
        </Switch>
        
      </React.Fragment>
    );
  }
}

export default withRouter(Main);

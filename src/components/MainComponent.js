import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Feed from "./FeedComponent";
import PetProfile from "./PetProfileComponent";
import Shelters from "./SheltersComponent";
import Lostpet from "./LostpetsComponent";
import { actions } from "react-redux-form";
import {
  addUniqueId,
  addFeed,
  postComment,
  addUserInfo,
  addPetCard
} from "../redux/ActionCreators";
//import { FEED } from "../shared/feedObjects";
const mapStateToProps = (state) => {
  return {
    uniqueId: state.uniqueId,
    feed: state.feed,
    text: state.text,
    userInfo: state.userInfo,
    petcard:state.petcard
  };
};

const mapDispatchToProps = {
  addUniqueId: (uniqueId) => addUniqueId(uniqueId),
  addFeed: (id, profileImg, profileName, text) =>
    addFeed(id, profileImg, profileName, text),
  postComment: (text) => postComment(text),
  addUserInfo: (
    profileImage,
    profileName,
    firstName,
    lastName,
    email,
    animalType,
    breed,
    mainColor,
    secondaryColor,

    
  ) =>
    addUserInfo(
      profileImage,
      profileName,
      firstName,
      lastName,
      email,
      animalType,
      breed,
      mainColor,
      secondaryColor,

      
    ),
    addPetCard: (petcard) => addPetCard(petcard),
  resetProfileForm: () => actions.reset("profileForm"),
  resetLostPetForm: () => actions.reset("lostPetForm"),
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: Feed,
    };
  }
  render() {
    return (
      <React.Fragment>
        <Header
          addUniqueId={this.props.addUniqueId}
          uniqueId={this.props.uniqueId}
        />
        <Switch>
          <Route
            path="/Feed"
            render={() => (
              <Feed
                postComment={this.props.postComment}
                text={this.props.text}
                feed={this.props.feed}
                userInfo={this.props.userInfo}
              />
            )}
          />
          <Route
            path="/PetProfile"
            render={() => (
              <PetProfile
                uniqueId={this.props.uniqueId}
                addUserInfo={this.props.addUserInfo}
                resetProfileForm={this.props.resetProfileForm}
                petcard={this.props.petcard}
                addPetCard={this.props.addPetCard}
              />
            )}
          />
          <Route path="/Shelters">
            <Shelters />
          </Route>
          <Route
            path="/Lostpets"
            render={() => (
              <Lostpet
              resetLostPetForm={this.props.resetLostPetForm}
                uniqueId={this.props.uniqueId}
                userInfo={this.props.userInfo}
              />
            )}
          />

          <Redirect to="/Feed" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

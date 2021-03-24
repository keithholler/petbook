import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  BrowserRouter,
} from "react-router-dom";

//import {ConfigureStore} from "../redux/configureStore";
//import {store} from "../redux/configureStore";

import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Feed from "./FeedComponent";
import PetProfile from "./PetProfileComponent";
import PublicProfile from "./PublicProfile";
import Shelters from "./SheltersComponent";
import Lostpet from "./LostpetsComponent";

import { actions } from "react-redux-form";
import {
  addUniqueId,
  postComment,
  addUserInfo,
  addPetCard,
  logoutUser,
  userPost,
  addUserInfoDB,
  updateUserInfoDB,
  getUserInfoDB,
} from "../redux/ActionCreators";
//import { FEED } from "../shared/feedObjects";
const mapStateToProps = (state) => {
  return {
    uniqueId: state.uniqueId,
    post: state.post,
    userInfo: state.userInfo,
    petcard: state.petcard,
    auth: state.auth,
    postreducer: state.postreducer,
    userinfodb: state.userinfodb,
    errors: state.errors,
  };
};

const mapDispatchToProps = {
  addUniqueId: (uniqueId) => addUniqueId(uniqueId),
  postComment: (postImage, text) => postComment(postImage, text),
  addUserInfo: (
    profileImage,
    profileName,
    firstName,
    lastName,
    email,
    animalType,
    breed,
    mainColor,
    secondaryColor
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
      secondaryColor
    ),
  addPetCard: (petId, petcard, petImage) =>
    addPetCard(petId, petcard, petImage),
  logoutUser: () => logoutUser(),
  userPost: (pic, body) => userPost(pic, body),

  addUserInfoDB: (profileImage, firstName, lastName, about) =>
    addUserInfoDB(profileImage, firstName, lastName, about),

  updateUserInfoDB: (profileImage, firstName, lastName, about) =>
    updateUserInfoDB(profileImage, firstName, lastName, about),
    getUserInfoDB:()=>getUserInfoDB(),
  resetProfileForm: () => actions.reset("profileForm"),
  resetLostPetForm: () => actions.reset("lostPetForm"),
};

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {/* <Register/>
        <Login/> */}
        <Header
          addUniqueId={this.props.addUniqueId}
          uniqueId={this.props.uniqueId}
          addUserInfo={this.props.addUserInfo}
          userInfo={this.props.userInfo}
          auth={this.props.auth}
          logoutUser={this.props.loginUser}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.props.userInfo.userInfo.profileName ? (
                <Redirect to="/PetProfile" />
              ) : (
                <Redirect to="/petbook" />
              );
            }}
          />

          <Route
            path="/PetProfile"
            render={() => (
              <PetProfile
                postComment={this.props.postComment}
                petcard={this.props.petcard}
                uniqueId={this.props.uniqueId}
                addPetCard={this.props.addPetCard}
                addUserInfo={this.props.addUserInfo}
                userInfo={this.props.userInfo}
                auth={this.props.auth}
                userinfodb={this.props.userinfodb}
                addUserInfoDB={this.props.addUserInfoDB}
                updateUserInfoDB={this.props.updateUserInfoDB}
                getUserInfoDB={this.props.getUserInfoDB}
              />
            )}
          />
          <Route
            path="/PublicProfile"
            render={() => (
              <PublicProfile
                post={this.props.post}
                uniqueId={this.props.uniqueId}
                addUserInfo={this.props.addUserInfo}
                resetProfileForm={this.props.resetProfileForm}
                petcard={this.props.petcard}
                addPetCard={this.props.addPetCard}
                userInfo={this.props.userInfo}
                auth={this.props.auth}
                userinfodb={this.props.userinfodb}
              />
            )}
          />
          <Route path="/Shelters">
            <Shelters />
          </Route>
          <Route
            path="/LostPets"
            render={() => (
              <Lostpet
                addUniqueId={this.props.addUniqueId}
                resetLostPetForm={this.props.resetLostPetForm}
                petcard={this.props.petcard}
                uniqueId={this.props.uniqueId}
                addUserInfo={this.props.addUserInfo}
                userInfo={this.props.userInfo}
                auth={this.props.auth}
              />
            )}
          />
          <Route
            path="/Feed"
            render={() => (
              <Feed
                addUniqueId={this.props.addUniqueId}
                postComment={this.props.postComment}
                post={this.props.post}
                userInfo={this.props.userInfo}
                uniqueId={this.props.uniqueId}
                addUserInfo={this.props.addUserInfo}
                auth={this.props.auth}
                addAuthUserInfo={this.props.addAuthUserInfo}
                userPost={this.props.userPost}
                postreducer={this.props.postreducer}
              />
            )}
          />
          <Route
            path="/petbook"
            render={() => (
              <Lostpet
                addUniqueId={this.props.addUniqueId}
                resetLostPetForm={this.props.resetLostPetForm}
                petcard={this.props.petcard}
                uniqueId={this.props.uniqueId}
                addUserInfo={this.props.addUserInfo}
                userInfo={this.props.userInfo}
                auth={this.props.auth}
              />
            )}
          />

          {/* <Redirect to="/LostPets" /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

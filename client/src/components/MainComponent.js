import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
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
  getUserPost,
  getPets,
  updatePet,
  addPet,
  resetState
} from "../redux/ActionCreators";


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
    pet:state.pet
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
    getUserPost:()=>getUserPost(),

    addPet: (name, petImage, animalType, breed, mainColor,secondaryColor,about) =>
    addPet(name, petImage, animalType, breed, mainColor,secondaryColor,about),

  updatePet: (name, petImage, animalType, breed, mainColor,secondaryColor,about) =>
  updatePet(name, petImage, animalType, breed, mainColor,secondaryColor,about),

    getPets:()=>getPets(),
    resetState:()=>resetState(),
  

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
          addUniqueId={this.props.addUniqueId}   //will be replaced with backend call
          uniqueId={this.props.uniqueId}         //will be replaced with backend call
          addUserInfo={this.props.addUserInfo}   // need to change info to addUserInfoDB
          userInfo={this.props.userInfo}         // need to change info to getUserInfoDB
          auth={this.props.auth}
          logoutUser={this.props.loginUser}
          getUserInfoDB={this.props.getUserInfoDB}
          userinfodb={this.props.userinfodb}
          resetState={this.props.resetState}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.props.auth.isAuthenticated ? (
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
                //postComment={this.props.postComment}  Take out
                petcard={this.props.petcard}            //will be replaced with backend call
                uniqueId={this.props.uniqueId}          //will be replaced with backend call
                addPetCard={this.props.addPetCard}      //will be replaced with backend call
                addUserInfo={this.props.addUserInfo}    // need to change info to addUserInfoDB
                userInfo={this.props.userInfo}          // need to change info to getUserInfoDB
                auth={this.props.auth}
                userinfodb={this.props.userinfodb}
                addUserInfoDB={this.props.addUserInfoDB}
                updateUserInfoDB={this.props.updateUserInfoDB}
                getUserInfoDB={this.props.getUserInfoDB}
                getUserPost={this.props.getUserPost}
                addPet={this.props.addPet}
                updatePet={this.props.updatePet}
                getPets={this.props.getPets}
                pet={this.props.pet}

              />
            )}
          />
          <Route
            path="/PublicProfile"
            render={() => (
              <PublicProfile
                post={this.props.post}                         //will be replaced with backend call
                uniqueId={this.props.uniqueId}                 //will be replaced with backend call
                addUserInfo={this.props.addUserInfo}           // need to change info to addUserInfoDB
                resetProfileForm={this.props.resetProfileForm}
                petcard={this.props.petcard}                   //will be replaced with backend call
                addPetCard={this.props.addPetCard}             //will be replaced with backend call
                userInfo={this.props.userInfo}                 // need to change info to getUserInfoDB
                auth={this.props.auth}
                userinfodb={this.props.userinfodb}
                getUserInfoDB={this.props.getUserInfoDB}
                getUserPost={this.props.getUserPost}
                postreducer={this.props.postreducer}
                getPets={this.props.getPets}
                pet={this.props.pet}
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
                addUniqueId={this.props.addUniqueId}             //will be replaced with backend call
                resetLostPetForm={this.props.resetLostPetForm}
                petcard={this.props.petcard}                     //will be replaced with backend call
                uniqueId={this.props.uniqueId}                   //will be replaced with backend call
                addUserInfo={this.props.addUserInfo}             // need to change info to addUserInfoDB
                userInfo={this.props.userInfo}                   // need to change info to getUserInfoDB
                auth={this.props.auth}
              />
            )}
          />
          <Route
            path="/Feed"
            render={() => (
              <Feed
                addUniqueId={this.props.addUniqueId}             //will be replaced with backend call
                postComment={this.props.postComment}             
                post={this.props.post}                            //will be replaced with postreducer
                userInfo={this.props.userInfo}                     // need to change info to getUserInfoDB
                uniqueId={this.props.uniqueId}                    //will be replaced with backend call
                addUserInfo={this.props.addUserInfo}                // need to change info to addUserInfoDB
                auth={this.props.auth}
                addAuthUserInfo={this.props.addAuthUserInfo}
                userPost={this.props.userPost}                      //?????
                postreducer={this.props.postreducer}
                userinfodb={this.props.userinfodb}
                getUserInfoDB={this.props.getUserInfoDB}

                
              />
            )}
          />
          <Route
            path="/petbook"
            render={() => (
              <Lostpet
                addUniqueId={this.props.addUniqueId}                //will be replaced with backend call
                resetLostPetForm={this.props.resetLostPetForm}
                petcard={this.props.petcard}                      //will be replaced with backend call
                uniqueId={this.props.uniqueId}                    //will be replaced with backend call
                addUserInfo={this.props.addUserInfo}             // need to change info to addUserInfoDB
                userInfo={this.props.userInfo}                    // need to change info to getUserInfoDB
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

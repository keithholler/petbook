import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";



export const addUniqueId = (uniqueId) => ({
  type: ActionTypes.ADD_UNIQUEID,
  payload: uniqueId,
});

export const postComment = (text,postImage) => ({
  type: ActionTypes.ADD_POST,
  payload: {text,postImage}
});

export const addUserInfo = (userId,userPick,profileInfo, isRegistered) => ({
  type: ActionTypes.ADD_USERINFO,
  payload: {userId,userPick,profileInfo,isRegistered},
});

export const addPetCard = (petId,petcard,petImage) => ({
  type: ActionTypes.ADD_PETCARD,
  payload: {petId,petcard,petImage}
});

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/PetProfile")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: ActionTypes.USER_LOADING
  };
};


export const addAuthUserInfo = userData =>{
  axios
  .put("/api/users/:userId", userData)
  return{
    type: ActionTypes.ADD_USER_POST
  }
 }



// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

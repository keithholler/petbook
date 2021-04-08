import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";



export const postComment = (text, postImage) => ({
  type: ActionTypes.ADD_POST,
  payload: { text, postImage },
});

export const addUserInfo = (info, userPick, profileInfo, isRegistered) => ({
  type: ActionTypes.ADD_USERINFO,
  payload: { info, userPick, profileInfo, isRegistered },
});



// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => history.push("/PetProfile")) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
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
    .catch(function (error) {
      const errorMessage = (() => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return error.response.data;
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          return error.request;
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
          return error.message;
        }
      })();

      dispatch({
        type: ActionTypes.GET_ERRORS,
        payload: errorMessage,
      });
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: ActionTypes.SET_CURRENT_USER,
    payload: decoded,
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: ActionTypes.USER_LOADING,
  };
};

// export const addAuthUserInfo = userData =>{
//   axios
//   .put("/api/users/:userId", userData)
//   return{
//     type: ActionTypes.ADD_USER_POST
//   }
//  }

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// export const userPost = ( title, body,callback) => dispatch => {
//   axios
//     .post("/api/posts/createpost", {title,body})

//     // .then(res => {

//     //  })
//     .catch(err =>
//       dispatch({
//         type: ActionTypes.ADD_USER_POST,
//         payload: err.response.data
//       })
//     );
// };

export function userPost(pic, body) {
  return (dispatch) => {
    //return function
    return axios
      .post("/api/posts/createpost", { pic, body }) //return post request response
      .then((data) => {
        //pass data in as a parameter, call the callback, dispatch the action.
        dispatch({
          type: ActionTypes.ADD_USER_POST,
          payload: data,
        });
      });
  };
}

export const getAllUser = () => (dispatch) => {
  axios.get("/api/userinfodbs/alluserinfo").then((data) => {
    //pass data in as a parameter, call the callback, dispatch the action.
    console.log(data);
    dispatch({
      type: ActionTypes.ALL_USER_INFODB,
      payload: data,
    });
  });
};

export const getAllPost = () => (dispatch) => {
  axios.get("/api/posts/allpost").then((data) => {
    //pass data in as a parameter, call the callback, dispatch the action.
    console.log(data);
    dispatch({
      type: ActionTypes.ALL_USER_POST,
      payload: data,
    });
  });
};

// export const registerUser = (userData, history) => dispatch => {
//   axios

//   .post("/api/users/register", userData)
//   .then(res => history.push("/PetProfile"))

export const addUserInfoDB = (profileImage, firstName, lastName, about) => (
  dispatch
) => {
  axios
    .post("/api/userinfodbs/createuserdata", {
      profileImage,
      firstName,
      lastName,
      about,
    }) //return post request response
    .then((data) => {
      //pass data in as a parameter, call the callback, dispatch the action.
      dispatch({
        type: ActionTypes.ADD_USER_INFODB,
        payload: data,
      });
    });
};

export const updateUserInfoDB = (profileImage, firstName, lastName, about) => (
  dispatch
) => {
  axios
    .put("/api/userinfodbs/updatedata", {
      profileImage,
      firstName,
      lastName,
      about,
    }) //return post request response
    .then((data) => {
      //pass data in as a parameter, call the callback, dispatch the action.
      dispatch({
        type: ActionTypes.UPDATE_USER_INFODB,
        payload: data,
      });
    });
};

export const getUserInfoDB = () => (dispatch) => {
  axios.get("/api/userinfodbs/mydata").then((data) => {
    //pass data in as a parameter, call the callback, dispatch the action.
    console.log(data);
    dispatch({
      type: ActionTypes.GET_USER_INFODB,
      payload: data,
    });
  });
};

export const getUserPost = () => (dispatch) => {
  axios.get("/api/posts/mypost").then((data) => {
    //pass data in as a parameter, call the callback, dispatch the action.
    console.log(data);
    dispatch({
      type: ActionTypes.GET_USER_POST,
      payload: data,
    });
  });
};

export const addPet = (
  name,
  petImage,
  animalType,
  breed,
  mainColor,
  secondaryColor,
  about
) => (dispatch) => {
  axios
    .post("/api/pets/createpet", {
      name,
      petImage,
      animalType,
      breed,
      mainColor,
      secondaryColor,
      about,
    }) //return post request response
    .then((data) => {
      //pass data in as a parameter, call the callback, dispatch the action.
      dispatch({
        type: ActionTypes.ADD_PET,
        payload: data,
      });
    });
};

export const updatePet = (
  name,
  petImage,
  animalType,
  breed,
  mainColor,
  secondaryColor,
  about
) => (dispatch) => {
  axios
    .put("/api/pets/updatepet", {
      name,
      petImage,
      animalType,
      breed,
      mainColor,
      secondaryColor,
      about,
    }) //return post request response
    .then((data) => {
      //pass data in as a parameter, call the callback, dispatch the action.
      dispatch({
        type: ActionTypes.UPDATE_PET,
        payload: data,
      });
    });
};

export const getPets = () => (dispatch) => {
  axios.get("/api/pets/mypets").then((data) => {
    //pass data in as a parameter, call the callback, dispatch the action.
    console.log(data);
    dispatch({
      type: ActionTypes.GET_PETS,
      payload: data,
    });
  });
};

export const resetState = () => {
  return {
    type: ActionTypes.RESET_STATE,
  };
};

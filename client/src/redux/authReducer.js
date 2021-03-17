import {
    SET_CURRENT_USER,
    USER_LOADING,
    ADD_USER_POST
  } from "./ActionTypes";
  const isEmpty = require("is-empty");
  const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
  };
  export const authReducer = (state = initialState, action)=> {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
      case USER_LOADING:
        return {
          ...state,
          loading: true
        };
        case ADD_USER_POST:
        return {
          ...state,
          // post:state.post.reverse().concat(action.payload).reverse()
        };
      default:
        return state;
    }
  }
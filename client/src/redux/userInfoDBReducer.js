import {
    ADD_USER_INFODB
  } from "./ActionTypes";
  const isEmpty = require("is-empty");
  const initialState = {
    title: "",
    body: "",
    loading: false
  };
  export const userInfoDBReducer = (state = { userInfoDB: [] }, action)=> {
    switch (action.type) {
        case ADD_USER_INFODB:
            return {
              ...state,
              userInfoDB:action.payload
             // title: action.payload.data.post.title,
            //  body: action.payload.data.post.body
              // post:state.post.reverse().concat(action.payload).reverse()
            };
          default:
            return state;      
    }
  }
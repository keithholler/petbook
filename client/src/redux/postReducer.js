import {
    ADD_USER_POST,
    GET_USER_POST
  } from "./ActionTypes";
  const isEmpty = require("is-empty");
  const initialState = {
    title: "",
    body: "",
    loading: false
  };
  export const postReducer = (state = { post: [] }, action)=> {
    switch (action.type) {
        case ADD_USER_POST:
            return {
              ...state,
              post:state.post.mypost
             // title: action.payload.data.post.title,
            //  body: action.payload.data.post.body
              // post:state.post.reverse().concat(action.payload).reverse()
            };
            case GET_USER_POST:
              return {
                ...state,
                post:action.payload.data
               // title: action.payload.data.post.title,
              //  body: action.payload.data.post.body
                // post:state.post.reverse().concat(action.payload).reverse()
              };
          default:
            return state;      
    }
  }
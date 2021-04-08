import { ADD_USER_POST, GET_USER_POST, RESET_STATE } from "./ActionTypes";
const isEmpty = require("is-empty");
const initialState = {
  post: [],
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_POST:
      return {
        ...state,
        post: state.mypost,
        // title: action.payload.data.post.title,
        //  body: action.payload.data.post.body
        // post:state.post.reverse().concat(action.payload).reverse()
      };
    case GET_USER_POST:
      return {
        ...state,
        post: action.payload.data,
        // title: action.payload.data.post.title,
        //  body: action.payload.data.post.body
        // post:state.post.reverse().concat(action.payload).reverse()
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

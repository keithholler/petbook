import * as ActionTypes from "./ActionTypes";
const initialState = {
  post: [],
};
export const Post = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return {
        ...state,
        post: state.post.reverse().concat(action.payload).reverse(),
      };
    case ActionTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

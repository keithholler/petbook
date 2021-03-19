import * as ActionTypes from "./ActionTypes";

export const Post = (state = { post: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return { ...state,
         post:state.post.reverse().concat(action.payload).reverse()
        };
    default:
      return state;
  }
};

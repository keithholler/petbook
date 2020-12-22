import { FEED } from "../shared/feedObjects";
import * as ActionTypes from "./ActionTypes";

export const Feed = (state = { feed: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEED:
      const comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };
    default:
      return state;
  }
};
